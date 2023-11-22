import * as React from 'react';
import Grid from '@mui/material/Grid';
import HomeContent from './HomeContent';

export default function HomeMain() {
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