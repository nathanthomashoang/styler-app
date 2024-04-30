'use client';

import axios from 'axios';
import * as React from 'react';
import ItemView from '@/components/server/ItemView';
import { Item } from '@/types/item';
import CircularProgress from '@mui/material/CircularProgress';

export async function generateStaticParams() {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/nathanthomashoang/db-json-styler/clothing');
      const items: Item[] = response.data;
  
      return items.map(item => ({
        id: item.id,
      }));
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }

const page = ({ params }: { params: { id: number } }) => {
    const [item, setItem] = React.useState<Item>();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function getItemById(id: number) {
            try {
                const response = await axios.get(`https://my-json-server.typicode.com/nathanthomashoang/db-json-styler/clothing/${id}`);
                setItem(response.data);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        getItemById(params.id);
    }, []);

    return (
        <div>
            {isLoading ?
                <div className="flex flex-row justify-center items-center h-96">
                    <CircularProgress />
                </div> :
                item && <ItemView item={item} />
            }
        </div>
    )
}

export default page
