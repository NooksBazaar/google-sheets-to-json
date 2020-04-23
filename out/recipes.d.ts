export interface Recipes {
    sourceSheet: SourceSheet;
    name: string;
    sources: string;
    sourceNotes: SourceNotes | null;
    category: Category;
    internalId: null;
    uniqueEntryId: string;
    materials: {
        [key: string]: number;
    };
}
export declare enum Category {
    Accessories = "Accessories",
    Bags = "Bags",
    Bottoms = "Bottoms",
    Dresses = "Dresses",
    Fencing = "Fencing",
    Floors = "Floors",
    Headwear = "Headwear",
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    Other = "Other",
    Rugs = "Rugs",
    Shoes = "Shoes",
    Tools = "Tools",
    Tops = "Tops",
    Umbrellas = "Umbrellas",
    WallMounted = "Wall-Mounted",
    Wallpaper = "Wallpaper"
}
export declare enum SourceNotes {
    OnlyAvailableDuringBunnyDay = "Only available during Bunny Day",
    OnlyAvailableDuringCherryBlossomSeason = "Only available during Cherry-Blossom Season",
    OnlyAvailableDuringFall = "Only available during Fall",
    OnlyAvailableDuringFestiveSeason = "Only available during Festive Season",
    OnlyAvailableDuringMapleLeafSeason = "Only available during Maple Leaf Season",
    OnlyAvailableDuringMushroomSeason = "Only available during Mushroom Season",
    OnlyAvailableDuringSpring = "Only available during Spring",
    OnlyAvailableDuringSummer = "Only available during Summer",
    OnlyAvailableDuringWinter = "Only available during Winter"
}
export declare enum SourceSheet {
    Recipes = "Recipes"
}
