import {OAuth2Client} from 'google-auth-library';
import {google, sheets_v4} from 'googleapis';
import fs from 'fs';
import {zipObject, camelCase} from 'lodash';
import {addMinutes, parse} from 'date-fns';

const SHEET_ID = '1lhr9srU-NWesmIklMBNSoGJt0Fx-GBfvb7zJzfoiJ1M';

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

const IGNORED_SHEETS = ['Construction', 'Achievements', 'Villagers'];

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
  ];

  for (const [key, sheetNames] of workSet) {
    console.log(`Loading ${key}`);

    let data = await loadData(sheets, sheetNames, key);

    console.log(`Writing raw file to disk`);
    fs.writeFileSync(
      `out/${key}-raw.json`,
      JSON.stringify(data, undefined, ' '),
    );

    console.log(`Normalising data`);
    data = await normalizeData(data, key);

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
  uses: normaliseUse,
  source: (input: string) => input.split('\n'),
  startTime: normaliseTime,
  endTime: normaliseTime,
};

function emptyDate() {
  return new Date('1970-01-01T00:00:00.000Z');
}

const NULL_VALUES = new Set(['None', 'NA', 'Does not play music']);
const ALL_DAY: Array<[string, string]> = [
  [
    emptyDate().toISOString(),
    new Date('1970-01-01T23:59:59.999Z').toISOString(),
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

    if (sheetKey === 'creatures') {
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
      } else {
        item['startTime'] = activeHours[0][0];
        item['endTime'] = activeHours[0][1];
      }

      item['activeHours'] = activeHours;
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

const TIME_FORMAT = 'hh:mm a';

function normaliseTime(input: string | number) {
  const date = emptyDate();

  if (typeof input === 'number') {
    const minutesToAdd = input * 24 * 60;

    const output = addMinutes(date, minutesToAdd).toISOString();

    return [output];
  }

  if (input === 'All day') {
    return null;
  }

  return input.split('\n').map(input2 => {
    const output = parse(input2, TIME_FORMAT, date);

    return output.toISOString();
  });
}
