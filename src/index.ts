import {OAuth2Client} from 'google-auth-library';
import {google, sheets_v4} from 'googleapis';
import fs from 'fs';
import {camelCase, isEqual, omit, pick, zipObject} from 'lodash';
import {addMinutes, format, parse} from 'date-fns';

const SHEET_ID = '1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM';

const ITEM_SHEETS = [
  'Housewares',
  'Miscellaneous',
  'Wall-mounted',
  'Wallpapers',
  'Floors',
  'Rugs',
  'Fencing',
  'Photos',
  'Posters',
  'Tools',
  'Tops',
  'Bottoms',
  'Dresses',
  'Headwear',
  'Accessories',
  'Socks',
  'Shoes',
  'Bags',
  'Umbrellas',
  'Music',
  'Fossils',
  'Other',
];

const CREATURE_SHEETS = [
  'Bugs - North',
  'Bugs - South',
  'Fish - North',
  'Fish - South',
];

const NOOK_MILE_SHEETS = ['Nook Miles'];

const RECIPE_SHEETS = ['Recipes'];

const VILLAGERS_SHEETS = ['Villagers'];

const CONSTRUCTION_SHEETS = ['Construction'];

const ACHIEVEMENTS_SHEETS = ['Achievements'];

type ItemData = any[];

export async function main(auth: OAuth2Client) {
  const sheets = google.sheets({version: 'v4', auth});

  if (!fs.existsSync('cache')) {
    fs.mkdirSync('cache');
  }

  if (!fs.existsSync('out')) {
    fs.mkdirSync('out');
  }

  const workSet: Array<[string, string[]]> = [
    ['items', ITEM_SHEETS],
    ['creatures', CREATURE_SHEETS],
    ['nookMiles', NOOK_MILE_SHEETS],
    ['recipes', RECIPE_SHEETS],
    ['villagers', VILLAGERS_SHEETS],
    ['construction', CONSTRUCTION_SHEETS],
    ['achievements', ACHIEVEMENTS_SHEETS],
  ];

  for (const [key, sheetNames] of workSet) {
    console.log(`Loading ${key}`);

    let data = await loadData(sheets, sheetNames, key);

    // console.log(`Writing raw file to disk`);
    // fs.writeFileSync(
    //   `out/${key}-raw.json`,
    //   JSON.stringify(data, undefined, ' '),
    // );

    console.log(`Normalising data`);
    data = await normalizeData(data, key);

    if (key === 'creatures') {
      data = await mergeCreatures(data);
    }

    if (key === 'items') {
      data = await mergeItemVariations(data);
    }

    console.log(`Writing data to disk`);
    fs.writeFileSync(`out/${key}.json`, JSON.stringify(data, undefined, ' '));

    console.log(`Finished ${key}`);
  }
}

export async function loadData(
  sheets: sheets_v4.Sheets,
  sheetNames: string[],
  key: string,
) {
  const cacheFile = `cache/${key}.json`;

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

  fs.writeFileSync(cacheFile, JSON.stringify(data, undefined, '  '));

  return data;
}

interface ValueFormatters {
  [key: string]: (input: string, item: any) => any;
}

const valueFormatters: ValueFormatters = {
  image: extractImageUrl,
  house: extractImageUrl,
  furnitureImage: extractImageUrl,
  critterpediaImage: extractImageUrl,
  closetImage: extractImageUrl,
  storageImage: extractImageUrl,
  albumImage: extractImageUrl,
  framedImage: extractImageUrl,
  uses: normaliseUse,
  source: (input: string) => input.split('\n'),
  startTime: normaliseTime,
  endTime: normaliseTime,
  birthday: normaliseBirthday,
};

function emptyDate() {
  return new Date('1970-01-01T00:00:00.000Z');
}

const TIME_FORMAT_IN = 'hh:mm a';
const TIME_FORMAT_OUT = 'HH:mm';

const NULL_VALUES = new Set([
  'None',
  'NA',
  'Does not play music',
  'No lighting',
]);

const ALL_DAY: Array<[string, string]> = [
  [
    format(emptyDate(), TIME_FORMAT_OUT),
    format(new Date('1970-01-01T23:59:59.999Z'), TIME_FORMAT_OUT),
  ],
];

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
      }

      if (valueFormatter) {
        value = valueFormatter(value, item);
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
      item['colors'] = [item['color2'], item['color2']].filter(item => !!item);
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

      if (item.sourceSheet === 'Tools') {
        delete item[''];
      }
    }

    if (sheetKey === 'creatures') {
      // Temporary workaround
      item['critterpediaImage'] = item['image'];
      item['furnitureImage'] = item['house'];
      delete item['image'];
      delete item['house'];

      const startTime: string[] = item['startTime'];
      const endTime: string[] = item['endTime'];
      let activeHours: Array<[string, string]> = ALL_DAY;

      if (startTime) {
        const totalTimeActives = startTime.length;
        activeHours = [];

        for (let i = 0; i < totalTimeActives; i++) {
          const start = startTime[i];
          const end = endTime[i];

          activeHours.push([start, end]);
        }
      }

      item['activeHours'] = activeHours;

      delete item['startTime'];
      delete item['endTime'];
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
  //  types are correct we'll force it to 9.5 :)
  if (input === '9.5?') {
    return 9.5;
  }

  throw new Error(`Unexpected Use value: ${input}`);
}

function normaliseTime(input: string | number) {
  const date = emptyDate();

  if (typeof input === 'number') {
    const minutesToAdd = input * 24 * 60;

    const output = addMinutes(date, minutesToAdd);

    return [format(output, TIME_FORMAT_OUT)];
  }

  if (input === 'All day') {
    return null;
  }

  return input.split('\n').map(input2 => {
    const output = parse(input2, TIME_FORMAT_IN, date);

    return format(output, TIME_FORMAT_OUT);
  });
}

const BDAY_FORMAT_IN = 'M/d';
const BDAY_FORMAT_OUT = 'MM-dd';

function normaliseBirthday(input: string) {
  const output = parse(input, BDAY_FORMAT_IN, emptyDate());

  return format(output, BDAY_FORMAT_OUT);
}

const AVAILABILITY_KEYS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

async function mergeCreatures(data: any[]) {
  const dataset: any = {};

  for (let rawCreature of data) {
    let creature = dataset[rawCreature.internalId];
    const sheetInfo = rawCreature.sourceSheet.split(' - ');
    const type = sheetInfo[0] === 'Fish' ? 'fish' : 'bug';
    const hemisphere = sheetInfo[1] === 'North' ? 'northern' : 'southern';
    delete rawCreature['sourceSheet'];

    if (!creature) {
      creature = {
        ...omit(rawCreature, [...AVAILABILITY_KEYS, 'uniqueEntryId']),
        type,
        specialSell: Math.round(rawCreature.sell * 1.5), // CJ / Flicks
        uniqueEntryId: {},
        availability: {},
      };

      dataset[rawCreature.internalId] = creature;
    }

    creature.uniqueEntryId[hemisphere] = rawCreature.uniqueEntryId;
    creature.availability[hemisphere] = mapAvailability(
      pick(rawCreature, AVAILABILITY_KEYS),
    );
  }

  return Object.values(dataset);
}

const ITEM_VARIATION_KEYS = [
  'image',
  'variation',
  'filename',
  'variantId',
  'uniqueEntryId',
  'colors',
  'pattern',
  'bodyCustomize',
  'bodyTitle',
  'closetImage',
  'storageImage',
  'internalId',
  'labelThemes',
];

const keysWithDifferentValueToRoot = new Set();

async function mergeItemVariations(data: any[]) {
  const dataset: any = {};

  for (let rawItem of data) {
    // if (! rawItem.name.toLower) {
    //   console.log(rawItem);
    //   process.exit(0);
    // }

    let key = (rawItem.name as string).toLowerCase();
    let item = dataset[key];

    if (!item) {
      item = {
        ...omit(rawItem, ITEM_VARIATION_KEYS),
        variants: [],
      };

      dataset[key] = item;
    }

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
  //
  //         if (key === 'sourceNotes') {
  //           console.log(item.name, key, val1, val2);
  //           process.exit(1);
  //         }
  //       }
  //     }
  //   }
  // }
  //
  // console.log(keysWithDifferentValueToRoot)

  return Object.values(dataset);
}

function mapAvailability(data: {[key: string]: boolean}): number[] {
  const availableMonths = [];

  let i = 1;
  for (const month of Object.keys(data)) {
    const isAvailable = data[month];

    if (isAvailable) {
      availableMonths.push(i);
    }

    i++;
  }

  return availableMonths;
}
