'use client';

import * as React from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import OutfitView from '@/components/client/OutfitView';
import { Item, itemCategoryOrder } from '@/types/item';

function getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function filterItemsBySelectedCategory(
    selectedCategories: {},
    items: Item[],
    randomizedItems: Item[],
)
    : Item[] {
    const selectedCategoriesArr = Object.entries(selectedCategories)
        .filter(([key, value]) => !!value)
        .map((category) => category[0]);

    const itemIdsToExclude = randomizedItems.map((item) => {
        return item.id
    });


    const filteredItems = items
        //filter down items by our selected categories && items not already shown
        .filter((item) => {
            return selectedCategoriesArr.includes(item.category) && !itemIdsToExclude.includes(item.id);
        })

    return filteredItems;
}

function getRandomizedItems(items: Item[]): Item[] {
    const itemsByCategory: Array<any> = [];
    const categoryIndexMap: any = {};
    const randomItems: Item[] = [];

    // Sort by category
    items.forEach((item) => {
        // check category
        let foundCategory = itemsByCategory.find((category: any) => category['name'] === item.category);
        if (!foundCategory) {
            // store category if not found and add index to map
            let categoryObj: any = {
                'name': item.category,
                'items': [],
            };
            itemsByCategory.push(categoryObj);
            categoryIndexMap[item.category] = itemsByCategory.length - 1;
        }

        // store item by category
        const categoryIndex = categoryIndexMap[item.category];
        itemsByCategory[categoryIndex]['items'].push(item);
    });
    // randomize
    itemsByCategory.forEach((category) => {
        const numItems = category['items'].length;
        const randomIndex = getRandomIntInclusive(0, numItems - 1);
        // store random item to result
        randomItems.push(category['items'][randomIndex]);
    })

    return randomItems;
}

const Page = () => {
    const [items, setItems] = React.useState<Item[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [randomizedItems, setRandomizedItems] = React.useState<Item[]>([]);
    const [isRandomizeFormDisabled, setIsRandomizeFormDisabled] = React.useState(false);

    const handleFormData = (selectedCategoriesData: {}) => {
        setIsRandomizeFormDisabled(true);
        const selectedItems = filterItemsBySelectedCategory(selectedCategoriesData, items, randomizedItems);
        const randomizedItemsBySelectedCategories = getRandomizedItems(selectedItems);

        // Create a set of categories from the selected items
        const selectedCategoriesItems = new Set(
            randomizedItemsBySelectedCategories.map(item => item.category)
        );

        // Filter out items from randomizedItems whose category is in selectedCategories
        const filteredRandomizedItems = randomizedItems.filter(item => !selectedCategoriesItems.has(item.category));

        // Combine the remaining randomizedItems with the new selected items
        const newRandomizedItems = [...filteredRandomizedItems, ...randomizedItemsBySelectedCategories];

        newRandomizedItems.sort((a, b) => {
            return itemCategoryOrder[a.category] - itemCategoryOrder[b.category];
        })

        setRandomizedItems(newRandomizedItems);
        setIsRandomizeFormDisabled(false);
    };

    React.useEffect(() => {
        // Fetch on initialization
        async function getAllItems() {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/nathanthomashoang/db-json-styler/clothing');
                setItems(response.data);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        getAllItems();
    }, []);

    React.useEffect(() => {
        if (items.length) {
            // Initially randomize all items after we fetch
            setRandomizedItems(getRandomizedItems(items));
        }
    }, [items]);

    return (
        <div>
            {isLoading ?
                <div className="flex flex-row justify-center items-center h-96">
                    <CircularProgress />
                </div> :
                <OutfitView
                    items={randomizedItems}
                    onFormData={handleFormData}
                    isDisabled={isRandomizeFormDisabled}
                />
            }
        </div>
    )
}

export default Page;