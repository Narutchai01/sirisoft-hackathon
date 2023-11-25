// import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HomeMain from '../Component/Home/HomeMain.jsx';
import HomeHero from '../Component/Home/HomeHero.jsx';

export default function Home() {
  return (
    <>
      <HomeHero/>
      <Grid container direction="column" style={{ minHeight: '100vh', marginTop: '40px' }}>
        <Grid item container spacing={2}>
          <Grid item xs={1.4}></Grid>
          <Grid item container direction='column' wrap='wrap' xs={9.2} padding={6} boxShadow={20}>
            <Grid item marginLeft={2}>
              <Typography item variant="h5" fontWeight={{ fontWeight: 'bold' }} marginLeft={1} gutterBottom>
                Popular Mall        
              </Typography>
              <br />
              <hr />
              <br />
            </Grid>
            <Grid item container marginLeft={2} alignItems="center">
              <HomeMain />
            </Grid>
          </Grid>
          <Grid item xs={1.4}></Grid>
        </Grid>
      </Grid>
    </>
  );
}
