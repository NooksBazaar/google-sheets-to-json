export interface Creatures {
  sourceSheet: SourceSheet;
  num: number;
  name: string;
  image: string;
  house: string;
  sell: number;
  whereHow: string;
  weather?: Weather;
  rarity: Rarity;
  startTime: Date[];
  endTime: Date[];
  jan: boolean;
  feb: boolean;
  mar: boolean;
  apr: boolean;
  may: boolean;
  jun: boolean;
  jul: boolean;
  aug: boolean;
  sep: boolean;
  oct: boolean;
  nov: boolean;
  dec: boolean;
  color1: Color;
  color2: Color;
  critterpediaFilename: null;
  itemFilename: string;
  internalId: number;
  activeHours: Array<Date[]>;
  shadow?: Shadow;
  rainSnowCatchUp?: boolean;
  size?: Size;
  lightingType?: LightingType;
}

export enum Color {
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

export enum LightingType {
  Emission = 'Emission',
  Fluorescent = 'Fluorescent',
  NoLighting = 'No lighting',
}

export enum Rarity {
  Common = 'Common',
  Rare = 'Rare',
  UltraRare = 'Ultra-rare',
  Uncommon = 'Uncommon',
}

export enum Shadow {
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

export enum Size {
  The1X1 = '1x1',
  The2X1 = '2x1',
  The2X2 = '2x2',
  The3X2 = '3x2',
}

export enum SourceSheet {
  BugsNorth = 'Bugs - North',
  BugsSouth = 'Bugs - South',
  FishNorth = 'Fish - North',
  FishSouth = 'Fish - South',
}

export enum Weather {
  AnyExceptRain = 'Any except rain',
  AnyWeather = 'Any weather',
  RainOnly = 'Rain only',
}
