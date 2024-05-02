import * as React from 'react';
import { Item } from '@/types/item';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemDetailTable from '@/components/server/ItemDetailTable';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

interface IItemViewProps {
    item: Item;
}

const ItemView = ({
    item
}: IItemViewProps) => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-4'>
                <div className='flex justify-center mb-5'>
                    <Card sx={{ maxWidth: 425, boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            src={item.imgUrl}
                            alt={item.category}
                        />
                    </Card>
                </div>
                <div className="ml-2 md:ml-0">
                    <Typography gutterBottom variant="h3" component="h1" fontFamily={montserrat.style.fontFamily}>
                        {item.title}
                    </Typography>
                    <div className='mb-8'>
                        <Typography gutterBottom variant="h6" component="h3" className='font-semibold'>
                            Description
                        </Typography>
                        <Typography gutterBottom>
                            {item.description}
                        </Typography>
                    </div>
                    <div>
                        <Typography gutterBottom variant="h6" component="h3" className="font-semibold">
                            Details
                        </Typography>
                        <ItemDetailTable item={item} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemView;
