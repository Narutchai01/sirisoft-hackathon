import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react';

const Img = styled('img') ({
  borderRadius: 12,
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  ":hover": {
    transform: 'scale(1.1)',
    boxShadow: '0px 5px 20px 0px #ccc',
    cursor: 'pointer',
  },
  '&.img-transition': {
    transition: 'opacity 0.3s ease-in-out',
    opacity: 1,
  },
  '&.img-transition-exit': {
    opacity: 0,
  },
});

const IconImg = styled('img') ({
  borderRadius: 12,
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  ":hover": {
    transform: 'scale(1.05)',
    boxShadow: '0px 5px 20px 0px #ccc',
    cursor: 'pointer',
  }
});

const ClickIcon = styled(({ direction, ...props }) => {
const IconComponent = direction === 'left' ? ArrowCircleLeftIcon : ArrowCircleRightIcon;

return <IconComponent {...props} />;
})({
':hover': {
  transform: 'scale(1.1)',
  cursor: 'pointer',
},
});

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: '0px 5px 10px 0px #ccc',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: 12,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '20vh',
  ":hover": {
    transform: 'scale(1.05)',
    boxShadow: '0px 5px 20px 0px #ccc',
  }
}));

function CouponContent(props) {
  const { iconImg, storeImg  } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftButtonClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + storeImg.length) % storeImg.length);
  };

  const handleRightButtonClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % storeImg.length);
  };

  return (
    <Item>
      <Grid item xs={2.8} style={{ paddingLeft: '10px', height: '100%' }}>
        <IconImg
          src={iconImg}
          loading="lazy"
        />
      </Grid>
      <Grid item xs={0.2} style={{ borderRight: '1px solid	#cdcdcd', height: '100%', marginRight: "20px"}}/>
      <Grid item container justifyItems="center" alignItems="center" xs={9} style={{ height: '100%' }}>
        <Grid item container xs={12} spacing={2} justifyContent="center" alignItems="center" style={{ height: '100%' }}>
            <Grid item xs={1} onClick={handleLeftButtonClick}> 
              <ClickIcon direction="left"/> 
            </Grid>
            <Grid item xs={2.5} style={{ height: '90%' }}> 
            <Img
                src={storeImg[currentImageIndex]}
                loading="lazy"
            />
            </Grid>
            <Grid item xs={2.5} style={{ height: '90%' }}> 
            <Img
                src={storeImg[(currentImageIndex + 1) % storeImg.length]}
                loading="lazy"
            />
            </Grid>
            <Grid item xs={2.5} style={{ height: '90%' }}> 
            <Img
                src={storeImg[(currentImageIndex + 2) % storeImg.length]}
                loading="lazy"
            />
            </Grid> 
            <Grid item xs={2.5} style={{ height: '90%' }}> 
            <Img
                src={storeImg[(currentImageIndex + 3) % storeImg.length]}
                loading="lazy"
            />
            </Grid> 
            <Grid item xs={1} onClick={handleRightButtonClick}> 
                <ClickIcon direction="right"/>
            </Grid>
        </Grid>
      </Grid>
    </Item>
  );
}

export default CouponContent;
