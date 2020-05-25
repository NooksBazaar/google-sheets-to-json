export interface Creatures {
  sourceSheet: SourceSheet;
  num: number;
  name: string;
  iconImage: string;
  critterpediaImage: string;
  furnitureImage: string;
  size: Size;
  sell: number;
  whereHow: string;
  shadow?: string;
  totalCatchesToUnlock: number;
  spawnRates: string;
  rainSnowCatchUp?: boolean;
  lightingType?: LightingType | null;
  iconFilename: string;
  critterpediaFilename: string;
  furnitureFilename: string;
  internalId: number;
  uniqueEntryId: string;
  colors: Color[];
  specialSell: number;
  activeMonths: ActiveMonths;
  weather?: Weather;
}
export interface ActiveMonths {
  northern: Thern[];
  southern: Thern[];
}
export interface Thern {
  month: number;
  isAllDay: boolean;
  activeHours: Array<string[]>;
  season: Season;
}
export declare enum Season {
  Autumn = 'autumn',
  Spring = 'spring',
  Summer = 'summer',
  Winter = 'winter',
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
export declare enum Size {
  The1X1 = '1x1',
  The2X1 = '2x1',
  The2X2 = '2x2',
  The3X2 = '3x2',
}
export declare enum SourceSheet {
  Fish = 'Fish',
  Insects = 'Insects',
}
export declare enum Weather {
  AnyExceptRain = 'Any except rain',
  AnyWeather = 'Any weather',
  RainOnly = 'Rain only',
}
