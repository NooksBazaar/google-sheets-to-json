export interface Recipes {
  sourceSheet: SourceSheet;
  name: string;
  buy: number;
  sell: number;
  milesPrice: number | null;
  source: string[];
  sourceNotes: null | string;
  versionAdded: Version;
  versionUnlocked: Version;
  recipesToUnlock: number;
  category: Category;
  craftedItemInternalId: number;
  cardColor: CardColor | null;
  serialId: number;
  internalId: number;
  uniqueEntryId: string;
  materials: {
    [key: string]: number;
  };
}
export declare enum CardColor {
  Beige = 'beige',
  Blue = 'blue',
  Brick = 'brick',
  Brown = 'brown',
  DarkGray = 'dark gray',
  Gold = 'gold',
  Green = 'green',
  LightGray = 'light gray',
  Orange = 'orange',
  Pink = 'pink',
  Red = 'red',
  Silver = 'silver',
  White = 'white',
  Yellow = 'yellow',
}
export declare enum Category {
  DressUp = 'Dress-Up',
  Equipment = 'Equipment',
  Floors = 'Floors',
  Housewares = 'Housewares',
  Miscellaneous = 'Miscellaneous',
  Other = 'Other',
  Rugs = 'Rugs',
  Tools = 'Tools',
  WallMounted = 'Wall-mounted',
  Wallpaper = 'Wallpaper',
}
export declare enum SourceSheet {
  Recipes = 'Recipes',
}
export declare enum Version {
  The100 = '1.0.0',
  The110 = '1.1.0',
  The110A = '1.1.0a',
  The120 = '1.2.0',
  The121C = '1.2.1c',
  The130 = '1.3.0',
}
