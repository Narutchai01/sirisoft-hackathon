import * as React from 'react';
import Grid from '@mui/material/Grid';
import HomeContent from './HomeContent';
import { Link } from 'react-router-dom';

export default function HomeMain() {
  return (
      <Grid container direction="column" spacing={3}>
        <Grid item xs={4}>
            <Link style={{textDecoration: 'none'}} to='/plan'> <HomeContent/> </Link>
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