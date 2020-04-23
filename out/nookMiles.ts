export interface NookMiles {
  sourceSheet: SourceSheet;
  name: string;
  image: string;
  nookMiles: number | null;
  category: Category | null;
  filename: null | string;
  internalId: number | null;
  uniqueEntryId: string;
}

export enum Category {
  Housewares = 'Housewares',
  Recipe = 'Recipe',
}

export enum SourceSheet {
  NookMiles = 'Nook Miles',
}
