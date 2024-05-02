"use client";

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#41463D',
      },
      secondary: {
        main: '#1446A0',
      },
    },
    typography: {
      fontFamily: [
        'Verdana',
        'sans-serif'
      ].join(','),
      fontSize: 14,
    },
  });