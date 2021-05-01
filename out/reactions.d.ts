export interface Reactions {
  sourceSheet: SourceSheet;
  num: number;
  name: string;
  image: string;
  source: string[];
  sourceNotes: null | string;
  seasonEvent: null | string;
  seasonEventExclusive: boolean | null;
  versionAdded: VersionAdded;
  iconFilename: string;
  internalId: number;
  uniqueEntryId: string;
}
export declare enum SourceSheet {
  Reactions = 'Reactions',
}
export declare enum VersionAdded {
  The100 = '1.0.0',
  The150 = '1.5.0',
  The160 = '1.6.0',
  The170 = '1.7.0',
}
