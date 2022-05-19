import React from 'react'
import { Grid, Box, Typography } from "@mui/material";
import background from '../../Assets/Images/background/1.jpg'

export default function Pagenotfound() {
    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }} >
                <Grid item md={4} xs={12}
                    className='logininputcontainer'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box>
                        <Typography variant="h3" component="h2">
                            Page Not Found !!!!!
                        </Typography>;
                    </Box>
                </Grid>
                <Grid item md={8}  >
                    <img src={background} className='sidebackground' alt="sidebackground" />
                </Grid>
            </Grid>
        </>
    )
}
