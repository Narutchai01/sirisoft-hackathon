import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function CouponPopup() {
    return (
        <Grid
            position="fixed"
            container
            alignContent='center'
            justifyContent="start"
            style={{ height: '100vh' }}
        >
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
            Test
            </Box>
        </Grid>
        </Grid>
    );
}
