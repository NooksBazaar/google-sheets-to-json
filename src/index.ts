import {OAuth2Client} from 'google-auth-library';
import {google, sheets_v4} from 'googleapis';
import fs from 'fs';
import {camelCase, omit, pick, zipObject, isEqual} from 'lodash';
import {DateTime} from 'luxon';

// import utc from 'dayjs/plugin/utc';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// import dayjs from 'dayjs';
//
// dayjs.extend(utc);
// dayjs.extend(customParseFormat);

const SHEET_ID = '1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM';

const OUTPUT = 'out';

const SHEET_GROUPS = {
  items: [
    'Housewares',
    'Miscellaneous',
    'Wall-mounted',
    'Wallpaper',
    'Floors',
    'Rugs',
    'Photos',
    'Posters',
    'Tools',
    'Fencing',
    'Tops',
    'Bottoms',
    'Dress-Up',
    'Headwear',
    'Accessories',
    'Socks',
    'Shoes',
    'Bags',
    'Umbrellas',
    'Clothing Other',
    'Music',
    'Fossils',
    'Art',
    'Other',
  ],
  creatures: ['Insects', 'Fish', 'Sea Creatures'],
  construction: ['Construction'],
  recipes: ['Recipes'],
  achievements: ['Achievements'],
  villagers: ['Villagers'],
  'special-npcs': ['Special NPCs'],
  reactions: ['Reactions'],
  'message-cards': ['Message Cards'],
  'season-and-events': ['Seasons and Events'],
};

type ItemData = any[];

const validateIds = false;

export async function main(auth: OAuth2Client) {
  const sheets = google.sheets({version: 'v4', auth});

  if (!fs.existsSync('cache')) {
    fs.mkdirSync('cache');
  }

  if (!fs.existsSync(OUTPUT)) {
    fs.mkdirSync(OUTPUT);
  }

  const ids = new Set();
  const duplicates = new Set();

  for (const [key, sheetNames] of Object.entries(SHEET_GROUPS)) {
    console.log(`Loading ${key}`);

    let data = await loadData(sheets, sheetNames, key);

    console.log(`Normalising data`);
    data = await normalizeData(data, key);

    if (validateIds) {
      for (const item of data) {
        if (ids.has(item['uniqueEntryId'])) {
          duplicates.add(item['uniqueEntryId']);
        }

        ids.add(item['uniqueEntryId']);
      }
    } else {
      if (key === 'items') {
        data = await mergeItemVariations(data);
      }

      console.log(`Writing data to disk`);
      writeJSON(`${OUTPUT}/${key}.json`, data);

      console.log(`Finished ${key}`);
    }
  }

  const all = [];

  for (const [key] of Object.entries(SHEET_GROUPS)) {
    if (key === 'achievements' || key === 'reactions') {
      continue;
    }

    const data = readJSON(`${OUTPUT}/${key}.json`);

    all.push(...data);
  }

  writeJSON(`${OUTPUT}/all.json`, all);

  if (validateIds) {
    console.log(duplicates);
  }
}

export async function loadData(
  sheets: sheets_v4.Sheets,
  sheetNames: string[],
  key: string,
) {
  const cacheFile = `cache/${key}.json`;

  // const response = await sheets.spreadsheets.get({
  //   spreadsheetId: SHEET_ID,
  // });
  //
  // const titles = response.data.sheets?.map((sheet) => sheet.properties?.title);
  //
  // console.log(titles);
  //
  // process.exit(0);

  try {
    const file = fs.readFileSync(cacheFile);

    return JSON.parse(file.toString());
  } catch (e) {} // ignored

  let data: ItemData = [];

  for (const sheetName of sheetNames) {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: sheetName,
      valueRenderOption: 'FORMULA',
    });

    const [header, ...rows] = response.data.values!;

    for (const row of rows) {
      data.push({SourceSheet: sheetName, ...zipObject(header, row)});
    }
  }

  writeJSON(cacheFile, data);

  return data;
}

interface ValueFormatters {
  [key: string]: (input: string, item: any) => any;
}

const valueFormatters: ValueFormatters = {
  uses: normaliseUse,
  source: (input: string) =>
    input.includes('\n')
      ? input.split('\n')
      : input.split(/[;,]/).map(i => i.trim()),
  birthday: normaliseBirthday,
};

const BDAY_FORMAT_IN = 'H/d';
const BDAY_FORMAT_OUT = 'HH/dd';
const ACTIVEHOURS_FORMAT_IN = 'h a';
const ACTIVEHOURS_FORMAT_OUT = 'HH';
const SEASON_EVENT_FORMAT_IN = 'MMMM d';
const SEASON_EVENT_FORMAT_OUT = 'LL/dd';

const NULL_VALUES = new Set([
  'None',
  'NA',
  'Does not play music',
  'No lighting',
]);

export async function normalizeData(data: ItemData, sheetKey: string) {
  for (const item of data) {
    // Normalise keys first
    for (const objectKey of Object.keys(item)) {
      let value = item[objectKey];
      delete item[objectKey];

      let key = camelCase(objectKey);

      // Need to convert # to num because camelCase converts it to an empty string
      if (objectKey === '#') {
        key = 'num';
      }

      item[key] = value;
    }

    // Normalise data second
    for (const key of Object.keys(item)) {
      let value = item[key];
      const valueFormatter = valueFormatters[key];

      if (typeof value === 'string') {
        value = value.trim();

        // Remove NBSP characters from the text.
        value = value.replace(String.fromCharCode(160), ' ');

        if (value.toLowerCase().startsWith('=image(')) {
          value = extractImageUrl(value);
        }
      }

      if (valueFormatter) {
        try {
          value = valueFormatter(value, item);
        } catch (e) {
          console.error(`Error formatting "${key}" for:`, item);

          throw e;
        }
      }

      if (
        NULL_VALUES.has(value) ||
        (typeof value === 'string' && value === '')
      ) {
        value = null;
      }

      if (value === 'Yes') {
        value = true;
      }
      if (value === 'No') {
        value = false;
      }

      if (value === 'NFS') {
        value = -1;
      }

      item[key] = value;
    }

    if (sheetKey === 'items') {
      item['colors'] = [item['color1'], item['color2']].filter(item => !!item);
      item['themes'] = [item['hhaConcept1'], item['hhaConcept2']].filter(
        item => !!item,
      );
      item['labelThemes'] = item.labelThemes
        ?.split(';')
        .map((item: string) => item.trim());
      item['set'] = item['hhaSet'];
      item['series'] = item['hhaSeries'];
      item['customizationKitCost'] = item['kitCost'];

      delete item['color1'];
      delete item['color2'];
      delete item['hhaConcept1'];
      delete item['hhaConcept2'];
      delete item['hhaSet'];
      delete item['hhaSeries'];
      delete item['kitCost'];

      if (item.sourceSheet === 'Tools') {
        delete item[''];
      }
    }

    if (sheetKey === 'creatures') {
      item['colors'] = [item['color1'], item['color2']].filter(item => !!item);

      item['specialSell'] = Math.round(item.sell * 1.5); // CJ / Flicks

      item['activeMonths'] = {
        northern: mapAvailability(pick(item, NH_AVAILABILITY_KEYS), true),
        southern: mapAvailability(pick(item, SH_AVAILABILITY_KEYS), false),
      };

      delete item['color1'];
      delete item['color2'];

      for (const key of [...NH_AVAILABILITY_KEYS, ...SH_AVAILABILITY_KEYS]) {
        delete item[key];
      }
    }

    if (sheetKey === 'recipes') {
      const materialNames = [
        item['material1'],
        item['material2'],
        item['material3'],
        item['material4'],
        item['material5'],
        item['material6'],
      ].filter(val => !!val);
      const materialCounts = [
        item['1'],
        item['2'],
        item['3'],
        item['4'],
        item['5'],
        item['6'],
      ].filter(val => !!val);

      item['materials'] = zipObject(materialNames, materialCounts);

      delete item['material1'];
      delete item['material2'];
      delete item['material3'];
      delete item['material4'];
      delete item['material5'];
      delete item['material6'];

      delete item['1'];
      delete item['2'];
      delete item['3'];
      delete item['4'];
      delete item['5'];
      delete item['6'];
    }

    if (sheetKey === 'villagers') {
      item['colors'] = [item['color1'], item['color2']].filter(item => !!item);
      item['styles'] = [item['style1'], item['style2']].filter(item => !!item);

      delete item['color1'];
      delete item['color2'];
      delete item['style1'];
      delete item['style2'];
    }
  }

  return data;
}

function extractImageUrl(input: string) {
  return input.slice(8, -2);
}

function normaliseUse(input: string | number) {
  if (typeof input === 'number') {
    return input;
  }

  if (input === 'Unlimited') {
    return -1;
  }

  // The flimsy fishing rod is the only tool that has variable use
  //  amounts, for some reason. For the purposes of ensuring our
  //  types are correct we'll force it to 7.5 :)
  if (input === '5-10') {
    return 7.5;
  }

  console.info(`Unexpected Use value: ${JSON.stringify(input)}`);

  return -1;
}

function normaliseBirthday(input: string) {
  return DateTime.fromFormat(input, BDAY_FORMAT_IN).toFormat(BDAY_FORMAT_OUT);
}

const NH_AVAILABILITY_KEYS = [
  'nhJan',
  'nhFeb',
  'nhMar',
  'nhApr',
  'nhMay',
  'nhJun',
  'nhJul',
  'nhAug',
  'nhSep',
  'nhOct',
  'nhNov',
  'nhDec',
];

const NH_SEASON = [
  'winter',
  'winter',
  'spring',
  'spring',
  'spring',
  'summer',
  'summer',
  'summer',
  'autumn',
  'autumn',
  'autumn',
  'winter',
];

const SH_SEASON = [
  'summer',
  'summer',
  'autumn',
  'autumn',
  'autumn',
  'winter',
  'winter',
  'winter',
  'spring',
  'spring',
  'spring',
  'summer',
];

const SH_AVAILABILITY_KEYS = [
  'shJan',
  'shFeb',
  'shMar',
  'shApr',
  'shMay',
  'shJun',
  'shJul',
  'shAug',
  'shSep',
  'shOct',
  'shNov',
  'shDec',
];

const ITEM_VARIATION_KEYS = [
  'image',
  'filename',
  'uniqueEntryId',
  'colors',
  'source',
  'internalId',
  'buy',
  'sell',
  'themes',
  'variation',
  'variantId',
  'bodyCustomize',
  'bodyTitle',
  'pattern',
  'closetImage',
  'storageImage',
  'labelThemes',
  'framedImage',
  'albumImage',
  'genuine',
  'inventoryImage',
];

const keysWithDifferentValueToRoot = new Set();

async function mergeItemVariations(data: any[]) {
  const dataset: any = {};

  for (let rawItem of data) {
    // if (! rawItem.name.toLower) {
    //   console.log(rawItem);
    //   process.exit(0);
    // }

    if (!rawItem.name) {
      console.error('No name present on: ', rawItem);
      process.exit(1);
    }

    let key = (rawItem.name as string).toLowerCase();
    let item = dataset[key];

    if (!item) {
      item = {
        ...omit(rawItem, ITEM_VARIATION_KEYS),
        variants: [],
      };

      dataset[key] = item;
    }

    // item.variants.push(rawItem);
    item.variants.push(pick(rawItem, ITEM_VARIATION_KEYS));
  }

  // This part of the code generates the keys to be put into `ITEM_VARIATION_KEYS`
  //
  // for (let item of Object.values(dataset) as any) {
  //   for (let variant of item.variants) {
  //     for (let key of Object.keys(variant)) {
  //       let val1 = item[key];
  //       let val2 = variant[key];
  //       const hasValue = val1 || val2;
  //       if (!isEqual(val1,val2) && hasValue) {
  //         keysWithDifferentValueToRoot.add(key);
  //       }
  //     }
  //   }
  // }
  //
  // console.log(keysWithDifferentValueToRoot)

  return Object.values(dataset);
}

function mapAvailability(
  data: {[key: string]: string},
  isNH: boolean,
): number[] {
  const availableMonths: any = [];

  let i = 0;
  for (const month of Object.keys(data)) {
    const isAvailable = data[month];

    if (isAvailable) {
      let isAllDay = false;
      let activeHours = [];

      if (isAvailable === 'All day') {
        isAllDay = true;
        activeHours.push(['00', '00']);
      } else {
        const dayParts = data[month].split(';');

        for (const part of dayParts) {
          const times = part.trim().split('–');
          const startTime = DateTime.fromFormat(
            times[0].trim(),
            ACTIVEHOURS_FORMAT_IN,
          ).toFormat(ACTIVEHOURS_FORMAT_OUT);

          const endTime = DateTime.fromFormat(
            times[1].trim(),
            ACTIVEHOURS_FORMAT_IN,
          ).toFormat(ACTIVEHOURS_FORMAT_OUT);

          isAllDay = false;
          activeHours.push([startTime, endTime]);
        }
      }

      availableMonths.push({
        month: i + 1,
        isAllDay,
        activeHours,
        season: isNH ? NH_SEASON[i] : SH_SEASON[i],
      });
    }

    i++;
  }

  return availableMonths;
}

function readJSON(filename: string) {
  const rawFileString = fs.readFileSync(filename).toString();
  return JSON.parse(rawFileString);
}

function writeJSON(filename: string, json: any) {
  fs.writeFileSync(filename, JSON.stringify(json, null, 2));
}
