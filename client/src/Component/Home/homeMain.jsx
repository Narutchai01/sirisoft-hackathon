import * as React from 'react';
import Grid from '@mui/material/Grid';
import HomeContent from './HomeContent.jsx';
import MallData from '../Data/MallData.js'

export default function HomeMain() {
    const getMallData = mallDataObj => {
        return (
            <Grid item xs={4}>
                <HomeContent {...mallDataObj}/>
            </Grid>
        );
    }
    return (
        <Grid container direction="column" spacing={3}>  
            {MallData.map(mallDataObjl => getMallData(mallDataObjl))}
        </Grid>
    );
}