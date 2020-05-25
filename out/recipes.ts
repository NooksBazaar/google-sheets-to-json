export interface Recipes {
  sourceSheet: SourceSheet;
  name: string;
  buy: number;
  sell: number;
  milesPrice: number | null;
  source: string[];
  sourceNotes: null | string;
  versionAdded: VersionAdded;
  versionUnlocked: VersionUnlocked | null;
  recipesToUnlock: number;
  category: Category;
  serialId: number;
  internalId: number;
  uniqueEntryId: string;
  materials: {[key: string]: number};
}

export enum Category {
  Accessories = 'Accessories',
  Bags = 'Bags',
  Bottoms = 'Bottoms',
  DressUp = 'Dress-Up',
  Fencing = 'Fencing',
  Floors = 'Floors',
  Headwear = 'Headwear',
  Housewares = 'Housewares',
  Miscellaneous = 'Miscellaneous',
  Other = 'Other',
  Rugs = 'Rugs',
  Shoes = 'Shoes',
  Tools = 'Tools',
  Tops = 'Tops',
  Umbrellas = 'Umbrellas',
  WallMounted = 'Wall-mounted',
  Wallpaper = 'Wallpaper',
}

export enum SourceSheet {
  Recipes = 'Recipes',
}

export enum VersionAdded {
  The100 = '1.0.0',
  The110 = '1.1.0',
  The120 = '1.2.0',
}

export enum VersionUnlocked {
  The100 = '1.0.0',
  The110A = '1.1.0a',
  The120 = '1.2.0',
}
