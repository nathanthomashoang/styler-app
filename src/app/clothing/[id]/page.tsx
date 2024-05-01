// "use client";

import axios from 'axios';
import * as React from 'react';
import ItemView from '@/components/server/ItemView';
import { Item } from '@/types/item';
// import CircularProgress from '@mui/material/CircularProgress';

// NOTE: Some aspects of React implementation of this specific view commented out in order to properly deploy to GH pages.

type Params = {
    id: string;
}

export async function generateStaticParams(): Promise<Params[]> {
    const items: Item[] = await fetch('https://my-json-server.typicode.com/nathanthomashoang/db-json-styler/clothing').then((res) => res.json());

    return items.map((item) => ({
        id: item.id.toString(),
    }));
}

async function getItemById(id: number) {
    try {
        const response = await axios.get(`https://my-json-server.typicode.com/nathanthomashoang/db-json-styler/clothing/${id}`);
        return response.data;

    } catch (error) {
        console.error(error);
    }
}

const page = async ({ params }: { params: { id: number } }) => {
    // const [item, setItem] = React.useState<Item>();
    // const [isLoading, setIsLoading] = React.useState(true);

    const item = await getItemById(params.id);

    // React.useEffect(() => {
    //     async function getItemById(id: number) {
    //         try {
    //             const response = await axios.get(`https://my-json-server.typicode.com/nathanthomashoang/db-json-styler/clothing/${id}`);
    //             setItem(response.data);
    //             setIsLoading(false);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //     getItemById(params.id);
    // }, []);

    return (
        <div>
            <ItemView item={item} />
        </div>
        // <div>
        //     {isLoading ?
        //         <div className="flex flex-row justify-center items-center h-96">
        //             <CircularProgress />
        //         </div> :
        //         item && <ItemView item={item} />
        //     }
        // </div>
    )
}

export default page;
