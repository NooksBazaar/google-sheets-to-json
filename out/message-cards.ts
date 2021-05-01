export interface MessageCards {
  sourceSheet: SourceSheet;
  name: string;
  image: string;
  buy: number;
  backColor: null | string;
  bodyColor: string;
  headColor: string;
  footColor: string;
  penColor1: string;
  penColor2: string;
  penColor3: string;
  penColor4: string;
  startDate: null | string;
  endDate: null | string;
  nhStartDate: null | string;
  nhEndDate: null | string;
  shStartDate: null | string;
  shEndDate: null | string;
  internalId: number;
  uniqueEntryId: string;
}

export enum SourceSheet {
  MessageCards = 'Message Cards',
}
