import React from 'react'
import { Item } from '@/types/item';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

interface IItemDetailTableProps {
    item: Item;
}

function createItemDetailData(item: Item) {
    const { dateUploaded, category, brand, imgAttribution } = item;

    return {
        'Date Uploaded': dateUploaded,
        'Brand': brand,
        'Category': category,
        'Photo By': imgAttribution,
    }
}

const ItemDetailTable = ({
    item
}: IItemDetailTableProps) => {
    const itemDetail = createItemDetailData(item);
    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableBody>
                    {Object.entries(itemDetail).map(([key, value], index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {key}
                            </TableCell>
                            {
                                key === 'Photo By'
                                    ? <TableCell align="left" style={{
                                        overflow: "hidden",
                                        overflowWrap: "anywhere"
                                      }}><a href={value} target="_blank" referrerPolicy="no-referrer">{value}</a></TableCell>
                                    : <TableCell align="left">{value}</TableCell>
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ItemDetailTable;
