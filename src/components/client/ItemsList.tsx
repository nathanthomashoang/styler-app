// TO DO - MOVE TO SERVER COMPONENT FOLDER AND TEST
import * as React from 'react';
import { Item, ITEM_CATEGORY_CONSTANTS } from '@/types/item';
import ItemCard from '@/components/client/ItemCard';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

interface IItemsListProps {
    items: Item[];
}

const ItemsList = ({
    items
}: IItemsListProps) => {
    // constants
    const {
        ITEM_CATEGORY_HEADWEAR,
        ITEM_CATEGORY_TOP,
        ITEM_CATEGORY_BOTTOM,
        ITEM_CATEGORY_FOOTWEAR,
    } = ITEM_CATEGORY_CONSTANTS

    // filter by item category
    const headItems = items.filter((item) => item.category === ITEM_CATEGORY_HEADWEAR);
    const topItems = items.filter((item) => item.category === ITEM_CATEGORY_TOP);
    const bottomItems = items.filter((item) => item.category === ITEM_CATEGORY_BOTTOM);
    const footItems = items.filter((item) => item.category === ITEM_CATEGORY_FOOTWEAR);

    return (
        <div>
            <Divider variant="middle">
                <Typography gutterBottom variant="h4" component="h2" fontFamily={montserrat.style.fontFamily}>
                    Headwear
                </Typography>
            </Divider>
            <div className="grid grid-cols-2 gap-0 md:grid-cols-4 md:gap-4">
                {headItems.map((item) => {
                    return <ItemCard item={item} key={item.id} />
                })}
            </div>
            <Divider variant="middle">
                <Typography gutterBottom variant="h4" component="h2" fontFamily={montserrat.style.fontFamily}>
                    Tops
                </Typography>
            </Divider>
            <div className="grid grid-cols-2 gap-0 md:grid-cols-4 md:gap-4">
                {topItems.map((item) => {
                    return <ItemCard item={item} key={item.id} />
                })}
            </div>
            <Divider variant="middle">
                <Typography gutterBottom variant="h4" component="h2" fontFamily={montserrat.style.fontFamily}>
                    Bottoms
                </Typography>
            </Divider>
            <div className="grid grid-cols-2 gap-0 md:grid-cols-4 md:gap-4">
                {bottomItems.map((item) => {
                    return <ItemCard item={item} key={item.id} />
                })}
            </div>
            <Divider variant="middle">
                <Typography gutterBottom variant="h4" component="h2" fontFamily={montserrat.style.fontFamily}>
                    Footwear
                </Typography>
            </Divider>
            <div className="grid grid-cols-2 gap-0 md:grid-cols-4 md:gap-4">
                {footItems.map((item) => {
                    return <ItemCard item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default ItemsList;
