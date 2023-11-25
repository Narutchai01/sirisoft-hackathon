import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const HomeHero = () => {
  const [showContent, setShowContent] = useState(false);

  const handleExpandClick = () => {
    setShowContent(!showContent);

    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
  };

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item container direction='column' paddingBottom={6} height='100%' alignItems='center' justifyContent='center' bgcolor={`rgba(0, 0, 0, 0.7)`} style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50, width: '100%', position: 'absolute',  }}>
        <Typography textAlign='center' variant='h1' fontWeight='bold' color='rgba(256, 256, 256, 0.7)'> MallMap </Typography>
        <Typography>
          <ExpandCircleDownIcon style={{ fontSize: '50px', color: 'rgba(256, 256, 256, 0.7)', cursor: 'pointer' }} onClick={handleExpandClick} />
        </Typography>
      </Grid>
      <img style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50, height: '100vh', width: '100%', objectFit: 'cover' }} src='https://www.trulyclassy.com/wp-content/uploads/2015/09/City-Top-View-in-bangkok.jpg' />
    </Grid>
  );
};

export default HomeHero;
