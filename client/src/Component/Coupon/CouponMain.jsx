import * as React from 'react';
import Grid from '@mui/material/Grid';
import CouponContent from './CouponContent.jsx';
import CouponData from '../Data/CouponData.js';
import CouponPopup from './CouponPopup.jsx';

export default function CouponMain() {
    const getCouponData = CouponDataObj => {
        return (
            <Grid item xs={4}>
                <CouponContent {...CouponDataObj}/>
            </Grid>
        );
    }
    return (
        <Grid>
            <CouponPopup />
            <Grid container direction="column" spacing={3}>  
                {CouponData.map(CouponDataObjl => getCouponData(CouponDataObjl))}
            </Grid>
        </Grid>
        
    );
}