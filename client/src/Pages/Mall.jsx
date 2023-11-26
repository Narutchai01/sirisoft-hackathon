import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import StoreSearch from '../Component/Search/StoreSearch';
import MallMain from '../Component/Mall/MallMain';
import StoreDetail from '../Component/Mall/StoreDetail';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Img = styled('img') ({
    borderRadius: 12,
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
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

const DetailBox = styled('div') ({
    border: '1px solid #C4C4C4',
    borderRadius: '10px',
    padding: '35px 16px',
    width: '92%',
    marginTop: '20px'
})

const Mall = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const iconImg = params.get('iconImg');
    const { mallName } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

return (
    <Grid container xs={12} justifyContent='center'>
        <Grid item container justifyContent='center' xs={9}  sx={{ height: '22vh', paddingY: '20px' }}>
            <Box item container sx={{ width: '100%', height: '100%' }}>
                <Img src={iconImg}></Img>
            </Box>
        </Grid>
        <Grid item xs={9} color='Grey' sx={{ height: '8vh'}}>
            <Typography variant='h5'> {mallName} </Typography>
            <Box sx={{ width: '100%', borderBottom: '1px solid #AAA', paddingY: '5px'}}/>
        </Grid>

        <Grid item container xs={9} sx={{ height: '58vh'}}>
            <Grid xs={3.5} sx={{ width: '100%', height: '100%', paddingBottom: '10px', paddingRight: '40px' }}>
                <StoreSearch/>

                <DetailBox>
                    <Typography variant='h6' fontWeight={{ fontWeight: 'bold' }} marginBottom={2}>Store detail</Typography>
                    <StoreDetail />
                </DetailBox>
            </Grid>
            <Grid xs={8.5} sx={{ width: '100%', height: '100%' }}>
                <MallMain/>
            </Grid>
        </Grid>
    </Grid>
);
}

export default Mall;
