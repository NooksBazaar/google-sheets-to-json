type AvailableCategories =
  | 'Housewares'
  | 'Miscellaneous'
  | 'Wall-mounted'
  | 'Wallpapers'
  | 'Floors'
  | 'Rugs'
  | 'Fencing'
  | 'Photos'
  | 'Posters'
  | 'Tools'
  | 'Tops'
  | 'Bottoms'
  | 'Dresses'
  | 'Headwear'
  | 'Accessories'
  | 'Socks'
  | 'Shoes'
  | 'Bags'
  | 'Umbrellas'
  | 'Music'
  | 'Fossils'
  | 'Other';

interface CommonFields {
  Category: AvailableCategories;
  Name: string;
  Image: string;
  Buy: number;
  Sell: number;
  Source: string; // Make this an enum?
  'Source Notes'?: string;
  Version: string; // expose a semver library
  Catalog?: string;
  Filename: string;
  'Internal ID': string;
  'Unique Entry ID': string;
  DIY: boolean;
}

interface VariationFields {
  // Variation
  Variation: string;
  'Variation ID': string;
}

interface HousewaresCategory extends CommonFields, VariationFields {
  Category: 'Housewares';
}

interface MiscellaneousCategory extends CommonFields, VariationFields {
  Category: 'Miscellaneous';
}

interface WallMountedCategory extends CommonFields, VariationFields {
  Category: 'Wall-mounted';
}

interface WallpapersCategory extends CommonFields {
  Category: 'Wallpapers';
}

interface FloorsCategory extends CommonFields {
  Category: 'Floors';
}

interface RugsCategory extends CommonFields {
  Category: 'Rugs';
}

interface FencingCategory extends CommonFields {
  Category: 'Fencing';
}

interface PhotosCategory extends CommonFields, VariationFields {
  Category: 'Photos';
}

interface PostersCategory extends CommonFields {
  Category: 'Posters';
}

interface ToolsCategory extends CommonFields, VariationFields {
  Category: 'Tools';
}

interface TopsCategory extends CommonFields, VariationFields {
  Category: 'Tops';
}

interface BottomsCategory extends CommonFields, VariationFields {
  Category: 'Bottoms';
}

interface DressesCategory extends CommonFields, VariationFields {
  Category: 'Dresses';
}

interface HeadwearCategory extends CommonFields, VariationFields {
  Category: 'Headwear';
}

interface AccessoriesCategory extends CommonFields, VariationFields {
  Category: 'Accessories';
}

interface SocksCategory extends CommonFields, VariationFields {
  Category: 'Socks';
}

interface ShoesCategory extends CommonFields, VariationFields {
  Category: 'Shoes';
}

interface BagsCategory extends CommonFields, VariationFields {
  Category: 'Bags';
}

interface UmbrellasCategory extends CommonFields {
  Category: 'Umbrellas';
}

interface MusicCategory extends CommonFields {
  Category: 'Music';
}

interface FossilsCategory extends CommonFields {
  Category: 'Fossils';
}

interface OtherCategory extends CommonFields {
  Category: 'Other';
}

type Item =
  | HousewaresCategory
  | MiscellaneousCategory
  | WallMountedCategory
  | WallpapersCategory
  | FloorsCategory
  | RugsCategory
  | FencingCategory
  | PhotosCategory
  | PostersCategory
  | ToolsCategory
  | TopsCategory
  | BottomsCategory
  | DressesCategory
  | HeadwearCategory
  | AccessoriesCategory
  | SocksCategory
  | ShoesCategory
  | BagsCategory
  | UmbrellasCategory
  | MusicCategory
  | FossilsCategory
  | OtherCategory;

const test: Item = {} as any;
