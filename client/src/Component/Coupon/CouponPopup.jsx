import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

export default function CouponPopup( displayCoupon ) {
    return (
        <Grid
            position="fixed"
            container
            alignContent='center'
            justifyContent="start"
            style={{ height: '100vh' }}
        >
            <Grid position="fixed" right='33%' top='42%' style={{ zIndex: 9999 }} onClick={displayCoupon}>
                <CloseIcon />
            </Grid>
            <Grid item xs={8.9} height="60%" textAlign='center'>
                <Box
                    textAlign='center'
                    bgcolor="#FAFAFA"
                    color="white"
                    height="80%"
                    width="50%"
                    p={2}
                    borderRadius={8}
                    margin='auto'
                    boxShadow="0px 5px 10px 0 #cdcdcd"
                >
                </Box>
            </Grid>
        </Grid>
    );
}
