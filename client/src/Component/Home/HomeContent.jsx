import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const images = [
  'https://i.pinimg.com/564x/be/d4/8b/bed48bdda035e9f54bf2a4fc12bdf80f.jpg',
  'https://i.pinimg.com/564x/19/f5/d8/19f5d81f895476d0f8c63a1e7cd0ac10.jpg',
  'https://i.pinimg.com/564x/aa/19/53/aa1953448aba2f4a98c0aa6271200581.jpg',
  'https://i.pinimg.com/736x/3a/48/26/3a482603c3bee598a471950a3fdc2ce5.jpg',
];

const Img = styled('img') ({
  borderRadius: 12,
  display: 'block',
  width: '100%',
  height: '100px',
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

const HoverIcon = styled(({ direction, ...props }) => {
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

function HomeContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftButtonClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleRightButtonClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Item>
      <Grid item xs={2.8} style={{ paddingLeft: '10px' }}>
        <IconImg
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          loading="lazy"
        />
      </Grid>
      <Grid item xs={0.2} style={{ borderRight: '1px solid	#cdcdcd', height: '100%', marginRight: "20px"}}/>
      <Grid item container justifyItems="center" alignItems="center" xs={9}>
        <Grid item container xs={2} maxHeight="100px" direction="column" wrap='wrap' alignItems="flex-start">
          <Link item xs={4} marginBottom="2px" style={{textDecoration: 'none'}} to='/plan'> <Grid fontSize={16} color='black'> Central Rama 2 </Grid> </Link>
          <Grid item xs={4} fontSize={10} marginBottom="3px"> 10 km from you </Grid>
          <Grid item xs={4} fontSize={10} textAlign="left"> <LocationOnIcon style={{ fontSize: '10px', marginLeft: '1px', marginRight: '4px' }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magni? asd asd adas ad asda asdadasa as da d </Grid>
        </Grid>

        <Grid item container xs={10} spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={1.5} onClick={handleLeftButtonClick}> 
              <HoverIcon direction="left"/> 
            </Grid>
            <Grid item xs={3} > 
            <Img
                src={images[currentImageIndex]}
                loading="lazy"
            />
            </Grid>
            <Grid item xs={3}> 
            <Img
                src={images[(currentImageIndex + 1) % images.length]}
                loading="lazy"
            />
            </Grid>
            <Grid item xs={3}> 
            <Img
                src={images[(currentImageIndex + 2) % images.length]}
                loading="lazy"
            />
            </Grid> 
            <Grid item xs={1.5} onClick={handleRightButtonClick}> 
                <HoverIcon direction="right"/>
            </Grid>
        </Grid>
      </Grid>
    </Item>
  );
}

export default HomeContent;
