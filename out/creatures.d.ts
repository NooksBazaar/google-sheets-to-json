export interface Creatures {
  sourceSheet: SourceSheet;
  num: number;
  name: string;
  iconImage: string;
  critterpediaImage: string;
  furnitureImage: string;
  sell: number;
  whereHow?: string;
  shadow?: Shadow;
  totalCatchesToUnlock: number;
  spawnRates: string;
  size: Size;
  surface: boolean;
  hhaBasePoints: number | null;
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
  movementSpeed?: MovementSpeed;
  versionAdded?: Version;
  versionUnlocked?: Version;
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
export declare enum MovementSpeed {
  Fast = 'Fast',
  Medium = 'Medium',
  Slow = 'Slow',
  Stationary = 'Stationary',
  VeryFast = 'Very fast',
  VerySlow = 'Very slow',
}
export declare enum Shadow {
  Large = 'Large',
  LargeWFin = 'Large w/Fin',
  Long = 'Long',
  Medium = 'Medium',
  MediumWFin = 'Medium w/Fin',
  Small = 'Small',
  XLarge = 'X-Large',
  XSmall = 'X-Small',
  XXLarge = 'XX-Large',
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
  SeaCreatures = 'Sea Creatures',
}
export declare enum Version {
  The130 = '1.3.0',
}
export declare enum Weather {
  AnyExceptRain = 'Any except rain',
  AnyWeather = 'Any weather',
  RainOnly = 'Rain only',
}
