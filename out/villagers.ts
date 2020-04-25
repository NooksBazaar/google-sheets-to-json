export interface Villagers {
  sourceSheet: SourceSheet;
  name: string;
  image: string;
  species: string;
  gender: Gender;
  personality: Personality;
  birthday: string;
  catchphrase: string;
  filename: string;
  uniqueEntryId: string;
  colors: Color[];
  styles: Style[];
}

export enum Color {
  Beige = 'Beige',
  Black = 'Black',
  Blue = 'Blue',
  Brown = 'Brown',
  Colorful = 'Colorful',
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

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export enum Personality {
  BigSister = 'Big sister',
  Cranky = 'Cranky',
  Jock = 'Jock',
  Lazy = 'Lazy',
  Normal = 'Normal',
  Peppy = 'Peppy',
  Smug = 'Smug',
  Snooty = 'Snooty',
}

export enum SourceSheet {
  Villagers = 'Villagers',
}

export enum Style {
  Active = 'Active',
  Cool = 'Cool',
  Cute = 'Cute',
  Elegant = 'Elegant',
  Gorgeous = 'Gorgeous',
  Simple = 'Simple',
}
