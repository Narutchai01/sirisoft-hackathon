import * as React from 'react';
import Grid from '@mui/material/Grid';
import HomeContent from './HomeContent';
import MallData from '../Data/MallData.js'

export default function HomeMain() {
    const getMallData = mallDataObj => {
        return <HomeContent {...mallDataObj}/>
    }
    return (
        <Grid container direction="column" spacing={3}>
            <Grid item xs={4}>
                <HomeContent/>
            </Grid>
            <Grid item xs={4}>
                <HomeContent/>
            </Grid>
            <Grid item xs={4}>
                <HomeContent/>
            </Grid>
            <Grid item xs={4}>
                <HomeContent/>
            </Grid>
        </Grid>
    );
}