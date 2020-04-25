export interface Recipes {
  sourceSheet: SourceSheet;
  name: string;
  sources: null | string;
  sourceNotes: SourceNotes | null;
  version: Version;
  category: Category;
  internalId: number;
  uniqueEntryId: string;
  materials: {
    [key: string]: number;
  };
}
export declare enum Category {
  Accessories = 'Accessories',
  Bags = 'Bags',
  Bottoms = 'Bottoms',
  Dresses = 'Dresses',
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
  WallMounted = 'Wall-Mounted',
  Wallpaper = 'Wallpaper',
}
export declare enum SourceNotes {
  OnlyAvailableDuringBunnyDay = 'Only available during Bunny Day',
  OnlyAvailableDuringCherryBlossomSeason = 'Only available during Cherry-Blossom Season',
  OnlyAvailableDuringFall = 'Only available during Fall',
  OnlyAvailableDuringFestiveSeason = 'Only available during Festive Season',
  OnlyAvailableDuringMapleLeafSeason = 'Only available during Maple Leaf Season',
  OnlyAvailableDuringMushroomSeason = 'Only available during Mushroom Season',
  OnlyAvailableDuringSpring = 'Only available during Spring',
  OnlyAvailableDuringSummer = 'Only available during Summer',
  OnlyAvailableDuringWeddingSeason = 'Only available during Wedding Season',
  OnlyAvailableDuringWinter = 'Only available during Winter',
}
export declare enum SourceSheet {
  Recipes = 'Recipes',
}
export declare enum Version {
  The100 = '1.0.0',
  The110A = '1.1.0a',
  The120 = '1.2.0',
}
