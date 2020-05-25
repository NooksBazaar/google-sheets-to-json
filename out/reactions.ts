export interface Reactions {
  sourceSheet: SourceSheet;
  name: string;
  image: string;
  source: string[];
  sourceNotes?: null | string;
  internalId?: null;
  uniqueEntryId?: string;
}

export enum SourceSheet {
  Reactions = 'Reactions',
}
