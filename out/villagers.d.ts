export interface Villagers {
  sourceSheet: SourceSheet;
  name: string;
  iconImage: string;
  photoImage: string;
  houseImage: null | string;
  species: string;
  gender: Gender;
  personality: Personality;
  subtype: Subtype;
  hobby: Hobby;
  birthday: string;
  catchphrase: string;
  favoriteSong: string;
  favoriteSaying: string;
  defaultClothing: number;
  defaultUmbrella: string;
  wallpaper: string;
  flooring: string;
  furnitureList: null | string;
  furnitureNameList: null | string;
  diyWorkbench: number | string;
  kitchenEquipment: string;
  versionAdded: VersionAdded;
  nameColor: string;
  bubbleColor: string;
  filename: string;
  uniqueEntryId: string;
  colors: Color[];
  styles: Style[];
}
export declare enum Color {
  Aqua = 'Aqua',
  Beige = 'Beige',
  Black = 'Black',
  Blue = 'Blue',
  Brown = 'Brown',
  Colorful = 'Colorful',
  Gray = 'Gray',
  Green = 'Green',
  Orange = 'Orange',
  Pink = 'Pink',
  Purple = 'Purple',
  Red = 'Red',
  White = 'White',
  Yellow = 'Yellow',
}
export declare enum Gender {
  Female = 'Female',
  Male = 'Male',
}
export declare enum Hobby {
  Education = 'Education',
  Fashion = 'Fashion',
  Fitness = 'Fitness',
  Music = 'Music',
  Nature = 'Nature',
  Play = 'Play',
}
export declare enum Personality {
  BigSister = 'Big Sister',
  Cranky = 'Cranky',
  Jock = 'Jock',
  Lazy = 'Lazy',
  Normal = 'Normal',
  Peppy = 'Peppy',
  Smug = 'Smug',
  Snooty = 'Snooty',
}
export declare enum SourceSheet {
  Villagers = 'Villagers',
}
export declare enum Style {
  Active = 'Active',
  Cool = 'Cool',
  Cute = 'Cute',
  Elegant = 'Elegant',
  Gorgeous = 'Gorgeous',
  Simple = 'Simple',
}
export declare enum Subtype {
  A = 'A',
  B = 'B',
}
export declare enum VersionAdded {
  The100 = '1.0.0',
  The190 = '1.9.0',
}
