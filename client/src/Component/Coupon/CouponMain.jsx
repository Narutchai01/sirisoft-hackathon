import * as React from 'react';
import Grid from '@mui/material/Grid';
import CouponContent from './CouponContent.jsx';
import CouponData from '../Data/CouponData.js';
import CouponPopup from './CouponPopup.jsx';

export default function CouponMain() {
    const [open, setOpen] = React.useState(false);
    console.log(open);

    const getCouponData = CouponDataObj => {
        return (
            <Grid item xs={4}>
                <CouponContent displayCoupon={() => setOpen(!open)}  {...CouponDataObj}/>
            </Grid>
        );
    }
    return (
        <Grid>
            { open && <CouponPopup displayCoupon={() => setOpen(!open)} style={{ zIndex: 9999 }}/>}
            <Grid container direction="column" spacing={3}>  
                {CouponData.map(CouponDataObjl => getCouponData(CouponDataObjl))}
            </Grid>
        </Grid>
        
    );
}