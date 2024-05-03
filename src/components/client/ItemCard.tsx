'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Item } from '@/types/item';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface IItemCardProps {
    item: Item;
}

const ItemCard = ({
    item
}: IItemCardProps) => {
    const router = useRouter();

    return (
        <Card sx={{
            maxWidth: 425,
            boxShadow: 'none',
            height: '100%'
        }}>
            <CardActionArea sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }} onClick={() => router.push(`/clothing/${item.id}`)}>
                <CardMedia
                    component="img"
                    src={item.imgUrl}
                    alt={item.category}
                />
                <CardContent sx={{
                    display: 'flex',
                    height: '100%',
                    width: '100%'
                }}>
                    <Typography gutterBottom component="div">
                        {item.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ItemCard;
