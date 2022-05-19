import React from 'react'
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
     
        primary: {
          main: "#49C5B6",
        },
      },
      text : {
          secondary : {
              main : '#ffff'
          }
      },
      shape : {
          borderRadius : 5
      },
      fontFamily: [
        '"Kanit"',
     'sans-serif'
      ].join(','),
})

export default theme;