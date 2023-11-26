import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Typography } from '@mui/material';
import Logo from '../../Assets/MallMapLogo.png';

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
        <Typography textAlign='center' fontWeight='bold' paddingLeft={10}> <img src={Logo}/> </Typography>
        <Typography textAlign='center' paddingY={2} variant='h4' fontWeight='bold' color='rgba(256, 256, 256, 0.7)'> 
          All you need For your plan  
        </Typography>
        <Typography>
          <ExpandCircleDownIcon 
            style={{ fontSize: '50px', color: 'rgba(256, 256, 256, 0.7)', cursor: 'pointer' }} 
            onClick={handleExpandClick} 
          />
        </Typography>
      </Grid>
      <img style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50, height: '100vh', width: '100%', objectFit: 'cover' }} src='https://www.trulyclassy.com/wp-content/uploads/2015/09/City-Top-View-in-bangkok.jpg' />
    </Grid>
  );
};

export default HomeHero;
