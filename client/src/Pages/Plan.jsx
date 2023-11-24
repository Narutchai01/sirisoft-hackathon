import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';

const Input = React.forwardRef(function CustomInput(props, ref) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
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
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

export default function Plan() {
  return (
    <Grid container height='100vh'>
      <Grid item container direction='column' alignItems="center" justifyContent='center' spacing={2} height='100%' width='100%'>
        <Grid item xs={2} height='100%' width='100%' marginBottom={2} display='flex' justifyContent='center' alignContent='center'>
          <Grid bgcolor='#ccc' width='80%' height='100%'></Grid>
          {/* <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src='https://mui.com/static/images/cards/contemplative-reptile.jpg' alt="Mall" /> */}
        </Grid>
        <Grid item xs={1} width='80%' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography alignSelf='start' variant="h5" color='grey' gutterBottom>
            Central Rama 2
          </Typography>
          <hr style={{ width: '99%', border: '1px solid #cdcdcd'}} />
        </Grid>
        <Grid item container xs={8} width='80%'>
          <Grid item container xs={3} paddingTop={2} paddingRight={3} direction='column' justifyContent='start'>
            <Grid item style={{ textAlign: 'center', maxWidth: '100%' }} xs={2}>
              <TextField
                label="Search"
                variant="outlined"
                fullWidth
                style={{ height: '20px' }}
              />
              <Input aria-label="Demo input" placeholder="Type something…" />
            </Grid>
            <Grid item style={{ marginTop: '10px' }} xs={2}>
              <Typography>Your Text</Typography>
              <Typography>
                This is a long wrapped text that spans multiple lines. It will adjust
                its size according to the content.
              </Typography>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
          <Grid item xs={1} borderLeft={2} borderColor='#cdcdcd'> </Grid>
          <Grid item xs={8}>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
