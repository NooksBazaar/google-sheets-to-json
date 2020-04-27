export interface Item {
    sourceSheet: SourceSheet;
    name: string;
    patternTitle?: null | string;
    diy?: boolean;
    patternCustomize?: boolean | null;
    size?: Size;
    sourceNotes?: null | string;
    version?: Version;
    interact?: boolean;
    tag?: null | string;
    speakerType?: SpeakerType | null;
    lightingType?: LightingType | null;
    catalog?: Catalog;
    set?: null | string;
    series?: null | string;
    customizationKitCost?: number | null;
    variants?: Variant[];
    doorDeco?: boolean;
    vfx?: boolean | null;
    vfxType?: VfxType | null;
    windowType?: WindowType | null;
    windowColor?: WindowColor | null;
    paneType?: PaneType | null;
    curtainType?: CurtainType | null;
    curtainColor?: null | string;
    ceilingType?: CeilingType | null;
    customize?: boolean;
    uses?: number;
    seasonalAvailability?: SeasonalAvailability;
    style?: Style;
    primaryShape?: PrimaryShape;
    secondaryShape?: SecondaryShape | null;
    type?: string;
    framedImage?: null | string;
    albumImage?: null | string;
    category?: Category | null;
    realArtworkTitle?: string;
    artist?: string;
    museumDescription?: string;
    num?: number;
    iconImage?: string;
    critterpediaImage?: string;
    furnitureImage?: string;
    sell?: number;
    whereHow?: string;
    shadow?: string;
    rarity?: Rarity;
    rainSnowCatchUp?: boolean;
    iconFilename?: string;
    critterpediaFilename?: string;
    furnitureFilename?: string;
    internalId?: number | null;
    uniqueEntryId?: string;
    colors?: Color[];
    specialSell?: number;
    activeHours?: Array<ActiveHour[]>;
    activeMonths?: ActiveMonths;
    weather?: Weather;
    inventoryFilename?: null | string;
    image?: string;
    nookMiles?: number | null;
    filename?: null | string;
    source?: string[];
    materials?: {
        [key: string]: number;
    };
    species?: string;
    gender?: Gender;
    personality?: Personality;
    hobby?: Hobby;
    birthday?: string;
    catchphrase?: string;
    styles?: Style[];
    buy?: number;
}
export declare enum ActiveHour {
    The0000 = "00:00",
    The0059 = "00:59",
    The0100 = "01:00",
    The0400 = "04:00",
    The0500 = "05:00",
    The0600 = "06:00",
    The0800 = "08:00",
    The0900 = "09:00",
    The1000 = "10:00",
    The1600 = "16:00",
    The1700 = "17:00",
    The1800 = "18:00",
    The1900 = "19:00",
    The2000 = "20:00",
    The2100 = "21:00",
    The2200 = "22:00"
}
export interface ActiveMonths {
    northern: number[];
    southern: number[];
}
export declare enum Catalog {
    ForSale = "For sale",
    NotForSale = "Not for sale",
    NotInCatalog = "Not in catalog"
}
export declare enum Category {
    Accessories = "Accessories",
    Bags = "Bags",
    Bottoms = "Bottoms",
    Bridge = "Bridge",
    Door = "Door",
    Dresses = "Dresses",
    Fencing = "Fencing",
    Floors = "Floors",
    Headwear = "Headwear",
    Housewares = "Housewares",
    Incline = "Incline",
    Mailbox = "Mailbox",
    Miscellaneous = "Miscellaneous",
    Other = "Other",
    Recipe = "Recipe",
    Roofing = "Roofing",
    Rugs = "Rugs",
    Shoes = "Shoes",
    Siding = "Siding",
    Tools = "Tools",
    Tops = "Tops",
    Umbrellas = "Umbrellas",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper"
}
export declare enum CeilingType {
    Cloth = "Cloth",
    Gold = "Gold",
    Plain = "Plain",
    Stone = "Stone",
    Tile = "Tile",
    Wood = "Wood"
}
export declare enum Color {
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
    Gray = "Gray",
    Green = "Green",
    Gren = "Gren",
    LightBlue = "Light blue",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Yellow = "Yellow"
}
export declare enum CurtainType {
    Curtains = "Curtains",
    RollerShades = "Roller Shades",
    SlattedBlinds = "Slatted Blinds"
}
export declare enum Gender {
    Female = "Female",
    Male = "Male"
}
export declare enum Hobby {
    Education = "Education",
    Fashion = "Fashion",
    Fitness = "Fitness",
    Music = "Music",
    Nature = "Nature",
    Play = "Play"
}
export declare enum LightingType {
    Candle = "Candle",
    Emission = "Emission",
    Fluorescent = "Fluorescent",
    Monitor = "Monitor",
    Spotlight = "Spotlight"
}
export declare enum PaneType {
    Glass = "Glass",
    Screen = "Screen"
}
export declare enum Personality {
    BigSister = "Big Sister",
    Cranky = "Cranky",
    Jock = "Jock",
    Lazy = "Lazy",
    Normal = "Normal",
    Peppy = "Peppy",
    Smug = "Smug",
    Snooty = "Snooty"
}
export declare enum PrimaryShape {
    ALine = "A-line",
    ALong = "A-long",
    BLong = "B-long",
    Balloon = "Balloon",
    Box = "Box",
    Dress = "Dress",
    Kimono = "Kimono",
    Overall = "Overall",
    Rib = "Rib",
    Robe = "Robe",
    Salopette = "Salopette"
}
export declare enum Rarity {
    Common = "Common",
    Rare = "Rare",
    UltraRare = "Ultra-rare",
    Uncommon = "Uncommon"
}
export declare enum SeasonalAvailability {
    AllYear = "All Year",
    Summer = "Summer",
    Winter = "Winter"
}
export declare enum SecondaryShape {
    H = "H",
    L = "L",
    N = "N"
}
export declare enum Size {
    The05X1 = "0.5x1",
    The15X15 = "1.5x1.5",
    The1X05 = "1x0.5",
    The1X1 = "1x1",
    The1X15 = "1x1.5",
    The1X2 = "1x2",
    The2X05 = "2x0.5",
    The2X1 = "2x1",
    The2X15 = "2x1.5",
    The2X2 = "2x2",
    The3X1 = "3x1",
    The3X2 = "3x2",
    The3X3 = "3x3",
    The4X3 = "4x3",
    The4X4 = "4x4",
    The5X5 = "5x5"
}
export declare enum SourceSheet {
    Accessories = "Accessories",
    Art = "Art",
    Bags = "Bags",
    Bottoms = "Bottoms",
    Bugs = "Bugs",
    Construction = "Construction",
    DressUp = "Dress-Up",
    Fencing = "Fencing",
    Fish = "Fish",
    Floors = "Floors",
    Fossils = "Fossils",
    Headwear = "Headwear",
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    Music = "Music",
    NookMiles = "Nook Miles",
    Other = "Other",
    Photos = "Photos",
    Posters = "Posters",
    Recipes = "Recipes",
    Rugs = "Rugs",
    Shoes = "Shoes",
    Socks = "Socks",
    Tools = "Tools",
    Tops = "Tops",
    Umbrellas = "Umbrellas",
    Villagers = "Villagers",
    WallMounted = "Wall-mounted",
    Wallpapers = "Wallpapers"
}
export declare enum SpeakerType {
    Cheap = "Cheap",
    HiFi = "Hi-fi",
    Phono = "Phono",
    Retro = "Retro"
}
export declare enum Style {
    Active = "Active",
    Cool = "Cool",
    Cute = "Cute",
    Elegant = "Elegant",
    EverydayComfy = "everyday; comfy",
    Gorgeous = "Gorgeous",
    Simple = "Simple"
}
export interface Variant {
    image?: string;
    variation?: number | null | string;
    filename: string;
    variantId?: VariantID | null;
    uniqueEntryId: string;
    colors: Color[];
    pattern?: null | string;
    bodyCustomize?: boolean | null;
    bodyTitle?: BodyTitle | null;
    source: string[];
    internalId: number;
    buy: number;
    sell: number | null;
    themes: Theme[];
    closetImage?: string;
    storageImage?: null | string;
    labelThemes?: LabelTheme[];
    inventoryImage?: string;
    genuine?: boolean;
    highResTexture?: null;
}
export declare enum BodyTitle {
    Art = "Art",
    BagColor = "Bag color",
    Bamboo = "Bamboo",
    BarrelColor = "Barrel color",
    BlockColor = "Block color",
    Body = "Body",
    BodyColor = "Body color",
    BrickColor = "Brick color",
    Can = "Can",
    Cardboard = "Cardboard",
    ChairBackAndSeat = "Chair back and seat",
    Coating = "Coating",
    Color = "Color",
    CoverDesign = "Cover design",
    CoverPattern = "Cover pattern",
    Creation = "Creation",
    Decorations = "Decorations",
    Design = "Design",
    Dish = "Dish",
    Easel = "Easel",
    Fabric = "Fabric",
    Finish = "Finish",
    Flavor = "Flavor",
    FlowerColor = "Flower color",
    Food = "Food",
    Frame = "Frame",
    FruitType = "Fruit type",
    Genre = "Genre",
    HayCondition = "Hay condition",
    Illumination = "Illumination",
    KnitCapColor = "Knit-cap color",
    LightColor = "Light color",
    LumberType = "Lumber type",
    MapCenter = "Map center",
    MushroomType = "Mushroom type",
    Name = "Name",
    Navigation = "Navigation",
    NutColor = "Nut color",
    Paint = "Paint",
    PaintColor = "Paint color",
    PlateColor = "Plate color",
    RoofColor = "Roof color",
    Season = "Season",
    ShellColor = "Shell color",
    Sign = "Sign",
    Stone = "Stone",
    Tabletop = "Tabletop",
    TireColor = "Tire color",
    Variation = "Variation"
}
export declare enum LabelTheme {
    Comfy = "comfy",
    Everyday = "everyday",
    FairyTale = "fairy tale",
    Formal = "formal",
    Goth = "goth",
    Outdoorsy = "outdoorsy",
    Party = "party",
    Sporty = "sporty",
    Theatrical = "theatrical",
    Vacation = "vacation",
    Work = "work"
}
export declare enum Theme {
    Bathroom = "bathroom",
    ChildSRoom = "child's room",
    Concert = "concert",
    Den = "den",
    Expensive = "expensive",
    Facility = "facility",
    Fancy = "fancy",
    Fitness = "fitness",
    FolkArt = "folk art",
    FreezingCold = "freezing cold",
    Garage = "garage",
    Garden = "garden",
    Horror = "horror",
    Kitchen = "kitchen",
    LivingRoom = "living room",
    Music = "music",
    Ocean = "ocean",
    Office = "office",
    Outdoors = "outdoors",
    Party = "party",
    School = "school",
    Shop = "shop",
    Space = "space",
    ZenStyle = "zen-style"
}
export declare enum VariantID {
    The0_0 = "0_0",
    The0_1 = "0_1",
    The0_2 = "0_2",
    The0_3 = "0_3",
    The0_4 = "0_4",
    The0_5 = "0_5",
    The0_6 = "0_6",
    The0_7 = "0_7",
    The1_0 = "1_0",
    The1_1 = "1_1",
    The1_2 = "1_2",
    The1_3 = "1_3",
    The1_4 = "1_4",
    The1_5 = "1_5",
    The1_6 = "1_6",
    The1_7 = "1_7",
    The2_0 = "2_0",
    The2_1 = "2_1",
    The2_2 = "2_2",
    The2_3 = "2_3",
    The2_4 = "2_4",
    The2_5 = "2_5",
    The2_6 = "2_6",
    The2_7 = "2_7",
    The3_0 = "3_0",
    The3_1 = "3_1",
    The3_2 = "3_2",
    The3_3 = "3_3",
    The3_4 = "3_4",
    The3_5 = "3_5",
    The3_6 = "3_6",
    The3_7 = "3_7",
    The4_0 = "4_0",
    The4_1 = "4_1",
    The4_2 = "4_2",
    The4_3 = "4_3",
    The4_4 = "4_4",
    The4_5 = "4_5",
    The4_6 = "4_6",
    The4_7 = "4_7",
    The5_0 = "5_0",
    The5_1 = "5_1",
    The5_2 = "5_2",
    The5_3 = "5_3",
    The5_4 = "5_4",
    The5_5 = "5_5",
    The5_6 = "5_6",
    The5_7 = "5_7",
    The6_0 = "6_0",
    The6_1 = "6_1",
    The6_2 = "6_2",
    The6_3 = "6_3",
    The6_4 = "6_4",
    The6_5 = "6_5",
    The6_6 = "6_6",
    The6_7 = "6_7",
    The7_0 = "7_0",
    The7_1 = "7_1",
    The7_2 = "7_2",
    The7_3 = "7_3",
    The7_4 = "7_4",
    The7_5 = "7_5",
    The7_6 = "7_6",
    The7_7 = "7_7"
}
export declare enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The110A = "1.1.0a",
    The120 = "1.2.0"
}
export declare enum VfxType {
    LightOff = "LightOff",
    Random = "Random",
    Synchro = "Synchro"
}
export declare enum Weather {
    AnyExceptRain = "Any except rain",
    AnyWeather = "Any weather",
    RainOnly = "Rain only"
}
export declare enum WindowColor {
    BlackMetal = "Black Metal",
    DarkWood = "Dark Wood",
    GreyMetal = "Grey Metal",
    GreyWood = "Grey Wood",
    LightWood = "Light Wood",
    NaturalWood = "Natural Wood",
    WhiteMetal = "White Metal",
    WhiteWood = "White Wood",
    Wood = "Wood"
}
export declare enum WindowType {
    Arch = "Arch",
    Circle = "Circle",
    FourPane = "Four Pane",
    SinglePane = "Single Pane",
    SlidingPane = "Sliding Pane"
}
