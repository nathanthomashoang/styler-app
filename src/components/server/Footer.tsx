import * as React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <footer className="bg-tw-accent">
            <div className='container py-4 mt-10 ml-5 md:mx-auto'>
                <Typography gutterBottom component="p">
                Nate H
                </Typography>
                <Typography className="pr-5" gutterBottom component="p">
                Work-in-progress unless otherwise stated.
                </Typography>
            </div>
        </footer>
    );
}

export default Footer;
