import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CouponMain from '../Component/Coupon/CouponMain.jsx';

export default function Coupon() {
    return (
        <Grid container direction="column" style={{ minHeight: '100vh', marginTop: '20px' }}>
        <Grid item container alignItems="center" justifyItems="center" spacing={2}>
            <Grid item xs={1.5}></Grid>
            <Grid item xs={9}>
            <Typography item variant="h5" color='grey' marginLeft={1} gutterBottom>
                Popular Mall        
            </Typography>
            <hr style={{ width: '99%', border: '1px solid	#cdcdcd', marginBottom: '30px' }} />    
            <CouponMain />
            </Grid>
            <Grid item xs={1.5}></Grid>
        </Grid>
        </Grid>
    );
}
