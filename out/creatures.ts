export interface Creatures {
  sourceSheet: SourceSheet;
  num: number;
  name: string;
  iconImage: string;
  critterpediaImage: string;
  furnitureImage: string;
  sell: number;
  whereHow?: string;
  weather?: Weather;
  totalCatchesToUnlock: number;
  spawnRates: string;
  size: Size;
  surface: boolean;
  description: string;
  catchPhrase: string;
  hhaBasePoints: number;
  hhaCategory: HhaCategory | null;
  iconFilename: string;
  critterpediaFilename: string;
  furnitureFilename: string;
  internalId: number;
  uniqueEntryId: string;
  colors: Color[];
  specialSell: number;
  activeMonths: ActiveMonths;
  shadow?: Shadow;
  catchDifficulty?: CatchDifficulty;
  vision?: Vision;
  lightingType?: LightingType | null;
  movementSpeed?: MovementSpeed;
  versionAdded?: VersionAdded;
  unlocked?: boolean;
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

export enum Season {
  Autumn = 'autumn',
  Spring = 'spring',
  Summer = 'summer',
  Winter = 'winter',
}

export enum CatchDifficulty {
  Easy = 'Easy',
  Hard = 'Hard',
  Medium = 'Medium',
  VeryEasy = 'Very Easy',
  VeryHard = 'Very Hard',
}

export enum Color {
  Aqua = 'Aqua',
  Beige = 'Beige',
  Black = 'Black',
  Blue = 'Blue',
  Brown = 'Brown',
  Gray = 'Gray',
  Green = 'Green',
  Orange = 'Orange',
  Pink = 'Pink',
  Purple = 'Purple',
  Red = 'Red',
  White = 'White',
  Yellow = 'Yellow',
}

export enum HhaCategory {
  Pet = 'Pet',
}

export enum LightingType {
  Emission = 'Emission',
  Fluorescent = 'Fluorescent',
}

export enum MovementSpeed {
  Fast = 'Fast',
  Medium = 'Medium',
  Slow = 'Slow',
  Stationary = 'Stationary',
  VeryFast = 'Very fast',
  VerySlow = 'Very slow',
}

export enum Shadow {
  Large = 'Large',
  Long = 'Long',
  Medium = 'Medium',
  Small = 'Small',
  XLarge = 'X-Large',
  XLargeWFin = 'X-Large w/Fin',
  XSmall = 'X-Small',
  XXLarge = 'XX-Large',
}

export enum Size {
  The1X1 = '1x1',
  The2X1 = '2x1',
  The2X2 = '2x2',
  The3X2 = '3x2',
}

export enum SourceSheet {
  Fish = 'Fish',
  Insects = 'Insects',
  SeaCreatures = 'Sea Creatures',
}

export enum VersionAdded {
  The130 = '1.3.0',
}

export enum Vision {
  Medium = 'Medium',
  Narrow = 'Narrow',
  VeryNarrow = 'Very Narrow',
  VeryWide = 'Very Wide',
  Wide = 'Wide',
}

export enum Weather {
  AnyExceptRain = 'Any except rain',
  AnyWeather = 'Any weather',
  RainOnly = 'Rain only',
}
