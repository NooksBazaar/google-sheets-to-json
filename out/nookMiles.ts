export interface NookMiles {
  category?: Category | null;
  name: string;
  image: string;
  nookMiles?: number;
  filename?: string;
  internalId?: number;
}

export enum Category {
  Housewares = 'Housewares',
  Recipe = 'Recipe',
}
