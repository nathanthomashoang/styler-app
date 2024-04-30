export interface Item {
    id: number;
    title: string;
    category: string;
    imgUrl: string;
    dateUploaded: string;
    description: string;
    imgAttribution: string;
    brand: string;
}

const ITEM_CATEGORY_HEADWEAR = 'headwear';
const ITEM_CATEGORY_TOP = 'tops';
const ITEM_CATEGORY_BOTTOM = 'bottoms';
const ITEM_CATEGORY_FOOTWEAR = 'footwear';

export const ITEM_CATEGORY_CONSTANTS = {
    ITEM_CATEGORY_HEADWEAR,
    ITEM_CATEGORY_TOP,
    ITEM_CATEGORY_BOTTOM,
    ITEM_CATEGORY_FOOTWEAR
}

export const itemCategoryOrder: { [K in Item['category']]: number } = {
    'headwear': 1,
    'tops': 2,
    'bottoms': 3,
    'footwear': 4,
}