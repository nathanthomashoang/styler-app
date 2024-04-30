"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemsList from '@/components/client/ItemsList';
import CircularProgress from '@mui/material/CircularProgress';

const Page = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TO DO: move fetches into a service layer of some sort
  useEffect(() => {
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

  return (
    <div>
      {isLoading ?
        <div className="flex flex-row justify-center items-center h-96">
          <CircularProgress />
        </div> :
        <ItemsList items={items} />
      }
    </div>
  )
}

export default Page