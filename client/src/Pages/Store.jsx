import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StoreMain from '../Component/Store/StoreMain.jsx'
import StoreSidebar from '../Component/Store/StoreSidebar.jsx'
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import Map from '../Component/Map/Map.jsx'
import StoreDestination from '../Component/Store/StoreDestination.jsx'

const Input = React.forwardRef(function CustomInput(props, ref) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

const Img = styled('img') ({
  borderRadius: 12,
  display: 'block',
  width: '80%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  ":hover": {
    transform: 'scale(1.01)',
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

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const InputElement = styled('input')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  width: 90%;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    transition: all 0.15s ease-in-out;
    scale: 1.1;
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

export default function Store() {
    return (
        <Grid container height='100vh'>
        <Grid item container direction='column' alignItems="center" justifyContent='space-evenly' height='100%' width='100%'>
            <Grid item container xs={2} height='20vh' width='100%' marginY={2} justifyContent='center' alignContent='center'>
            <Img src='https://mui.com/static/images/cards/contemplative-reptile.jpg' />
            </Grid>
            <Grid item xs={1} width='80%' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography alignSelf='start' variant="h5" color='grey' gutterBottom>
                Central Rama 2
            </Typography>
            <hr style={{ width: '99%', border: '1px solid #cdcdcd'}} />
            </Grid>
            <Grid item container xs={8} width='80%'>
            <Grid item container xs={3} paddingRight={3} direction='column' justifyContent='start'  height='65vh' padding={2} boxShadow= '-10px 10px 20px 0px #ccc'>
                <Grid item style={{ textAlign: 'center', maxWidth: '100%' }} xs={1}>
                <Input aria-label="Demo input" placeholder="Search Store" />
                </Grid>
                <Grid item width='90%' paddingLeft='10px' color='#AAA' style={{ marginTop: '10px' }} xs={2}>
                <StoreSidebar/>
                </Grid>
                <Grid item xs={8} container justifyContent='center' alignContent='center'>
                <StoreDestination/>
                </Grid>
            </Grid>
            <Grid item xs={0.5} borderRight={2} height='65vh' borderColor='#cdcdcd'> </Grid>
            <Grid item xs={0.5}> </Grid>
            <Grid item xs={8} height='65vh' display='flex'>
                <Map/>
            </Grid>
            </Grid>
        </Grid>
        </Grid>
    );
}
