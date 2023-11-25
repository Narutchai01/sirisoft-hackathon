// import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HomeMain from '../Component/Home/HomeMain';

export default function Home() {
  return (
    <>
      <Grid container direction="column" style={{ minHeight: '100vh', marginTop: '20px' }}>
        <Grid item container alignItems="center" justifyItems="center" spacing={2}>
          <Grid item xs={1.5}></Grid>
          <Grid item xs={9}>
            <Typography item variant="h5" fontWeight={{ fontWeight: 'bold' }} marginLeft={1} gutterBottom margin={0}>
              Popular Mall        
            </Typography>
            <br />
            <hr />
            <br />
            <HomeMain />
          </Grid>
          <Grid item xs={1.5}></Grid>
        </Grid>
      </Grid>
    </>
  );
}
