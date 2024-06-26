import * as React from 'react'
import { Item } from '@/types/item';
import ItemCard from '@/components/client/ItemCard';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

interface IOutfitViewProps {
    items: Item[];
    onFormData: (data: any) => any;
    isDisabled: boolean;
}

interface ClothingCategories {
    headwear: boolean;
    tops: boolean;
    bottoms: boolean;
    footwear: boolean;
    [key: string]: boolean;
}

const OutfitView = ({
    items,
    onFormData,
    isDisabled
}: IOutfitViewProps) => {
    const [categoryFormState, setCategoryFormState] = React.useState<ClothingCategories>({
        "headwear": true,
        "tops": true,
        "bottoms": true,
        "footwear": true
    });

    const handleCheckboxChange = (event: any) => {
        const { name, checked } = event.target;
        setCategoryFormState(prev => ({
            ...prev,
            [name]: checked
        }));
    }

    const handleSubmit = (event: any) => {
        onFormData(categoryFormState);
    }

    return (
        <div className="flex flex-col md:flex-col-reverse">
            <div className="flex mb-8 justify-center md:mt-8 md:mb-0">
                <Button
                    className="w-11/12 md:w-6/12"
                    size="large"
                    variant="outlined"
                    onClick={handleSubmit}
                    disabled={isDisabled}
                >
                    <Typography variant="h6" fontFamily={playfairDisplay.style.fontFamily}>
                        Randomize Outfit
                    </Typography>
                </Button>
            </div>
            <form className='grid grid-cols-2 md:grid-cols-4 md:gap-4'>
                {items.map((item) =>
                    <div key={item.id} className="flex flex-col justify-between mb-5 mx-2 md:mx-0">
                        <Divider variant="middle">
                            <Typography className="flex justify-center" gutterBottom variant="h6" component="div" fontFamily={playfairDisplay.style.fontFamily}>
                                {item.category}
                            </Typography>
                        </Divider>
                        <ItemCard item={item} />
                        <FormControlLabel
                            className="flex justify-center mr-0"
                            control={<Checkbox
                                checked={categoryFormState[item.category]}
                                name={item.category}
                                onChange={handleCheckboxChange}
                                disabled={isDisabled} />
                            }
                            label='Randomize' />
                    </div>
                )}
            </form>
        </div>
    )
}

export default OutfitView;
