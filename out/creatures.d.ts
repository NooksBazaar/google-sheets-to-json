export interface Creatures {
  sourceSheet: SourceSheet;
  num: number;
  name: string;
  iconImage: string;
  critterpediaImage: string;
  furnitureImage: string;
  sell: number;
  whereHow: string;
  shadow?: string;
  rarity: Rarity;
  rainSnowCatchUp?: boolean;
  size?: Size;
  lightingType?: LightingType | null;
  iconFilename: string;
  critterpediaFilename: string;
  furnitureFilename: string;
  internalId: number;
  uniqueEntryId: string;
  colors: Color[];
  specialSell: number;
  activeHours: Array<ActiveHour[]>;
  activeMonths: ActiveMonths;
  weather?: Weather;
  inventoryFilename?: null | string;
}
export declare enum ActiveHour {
  The0000 = '00:00',
  The0300 = '03:00',
  The0400 = '04:00',
  The0500 = '05:00',
  The0700 = '07:00',
  The0800 = '08:00',
  The0900 = '09:00',
  The1500 = '15:00',
  The1600 = '16:00',
  The1700 = '17:00',
  The1800 = '18:00',
  The1900 = '19:00',
  The2000 = '20:00',
  The2100 = '21:00',
  The2300 = '23:00',
  The2359 = '23:59',
}
export interface ActiveMonths {
  northern: number[];
  southern: number[];
}
export declare enum Color {
  Beige = 'Beige',
  Black = 'Black',
  Blue = 'Blue',
  Brown = 'Brown',
  Gray = 'Gray',
  Green = 'Green',
  LightBlue = 'Light blue',
  Orange = 'Orange',
  Pink = 'Pink',
  Purple = 'Purple',
  Red = 'Red',
  White = 'White',
  Yellow = 'Yellow',
}
export declare enum LightingType {
  Emission = 'Emission',
  Fluorescent = 'Fluorescent',
}
export declare enum Rarity {
  Common = 'Common',
  Rare = 'Rare',
  UltraRare = 'Ultra-rare',
  Uncommon = 'Uncommon',
}
export declare enum Size {
  The1X1 = '1x1',
  The2X1 = '2x1',
  The2X2 = '2x2',
  The3X2 = '3x2',
}
export declare enum SourceSheet {
  Bugs = 'Bugs',
  Fish = 'Fish',
}
export declare enum Weather {
  AnyExceptRain = 'Any except rain',
  AnyWeather = 'Any weather',
  RainOnly = 'Rain only',
}
