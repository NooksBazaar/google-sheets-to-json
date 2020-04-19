export interface Recipes {
  '1': number;
  '2': number | null;
  '3': number | null;
  '4': number | null;
  '5': number | null;
  '6': number | null;
  category: Category;
  name: string;
  material1: string;
  material2: null | string;
  material3: null | string;
  material4: null | string;
  material5: null | string;
  material6: Material6 | null;
  sources: null | string;
  sourceNotes: null;
}

export enum Category {
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

export enum Material6 {
  Coconut = 'coconut',
  Cowrie = 'cowrie',
  PurpleWindflowers = 'purple windflowers',
  WaterEgg = 'water egg',
}
