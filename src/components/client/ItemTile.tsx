"use client";

import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Item } from '@/types/item';

interface IItemTitleProps {
    item: Item;
}

const ItemTile = ({
    item
}: IItemTitleProps) => {
    return (
        <ImageListItem key={item.id}>
            <img
                srcSet={`${item.imgUrl}`}
                src={item.imgUrl}
                alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.category}</span>}
                position="below"
            />
        </ImageListItem>
    )
}

export default ItemTile;