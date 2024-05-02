import * as React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <footer className="bg-tw-accent shadow-2xl shadow-black">
            <div className='py-4 mt-10 mx-5 md:mx-16'>
                <Typography gutterBottom component="p">
                Nate H
                </Typography>
                <Typography className="" gutterBottom component="p">
                Work-in-progress unless otherwise noted.
                </Typography>
            </div>
        </footer>
    );
}

export default Footer;
