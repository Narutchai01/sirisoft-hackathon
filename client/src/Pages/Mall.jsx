import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import StoreSearch from '../Component/Search/StoreSearch';
import MallMain from '../Component/Mall/MallMain';

const Img = styled('img') ({
    borderRadius: 12,
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    ":hover": {
    transform: 'scale(1.01)',
    boxShadow: '0px 5px 20px 0px #ccc',
    cursor: 'pointer',
},
'&.img-transition': {
    transition: 'opacity 0.3s ease-in-out',
    opacity: 1,
},
'&.img-transition-exit': {
    opacity: 0,
},
});

const Mall = () => {
return (
    <Grid container xs={12} justifyContent='center'>
        <Grid item container justifyContent='center' xs={9}  sx={{ height: '22vh', paddingY: '20px' }}>
            <Box item container sx={{ width: '100%', height: '100%' }}>
                <Img src='https://img.salehere.co.th/p/1200x0/2023/07/17/1qrm9d5idnzc.jpg'></Img>
            </Box>
        </Grid>
        <Grid item xs={9} color='Grey' sx={{ height: '8vh'}}>
            <Typography variant='h5'>Central Rama 2</Typography>
            <Box sx={{ width: '100%', borderBottom: '1px solid #AAA', paddingY: '5px'}}/>
        </Grid>

        <Grid item container xs={9} sx={{ height: '58vh'}}>
            <Grid xs={3.5} sx={{ width: '100%', height: '100%', paddingBottom: '10px', paddingRight: '40px' }}>
                <StoreSearch/>
            </Grid>
            <Grid xs={8.5} sx={{ width: '100%', height: '100%' }}>
                <MallMain/>
            </Grid>
        </Grid>
    </Grid>
);
}

export default Mall;
