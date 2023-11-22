import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Img = styled('img') ({
    borderRadius: 12,
    display: 'block',
    width: '80%',
    height: '80%'
});

const Item = styled(Paper)(({ theme }) => ({
  border: '1px solid #ccc',
  boxShadow: 'none',
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
}));

function HomeContent() {
  return (
    <Item>
      <Grid item xs={2.5} style={{ paddingLeft: '10px' }}>
        <Img
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          loading="lazy"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </Grid>
      <Grid item xs={0.5} style={{ borderRight: '1px solid	#cdcdcd', height: '100%' }}/>
      <Grid item container justifyContent="center" alignItems="center" xs={9}>
        <Grid item container direction="column" xs={2} maxHeight="100px">
            <Grid item xs={4}> text </Grid>
        </Grid>

        <Grid item container xs={10} spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={1.5}> <ArrowCircleLeftIcon/> </Grid>
            <Grid item xs={3}> 
            <Img
                src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                loading="lazy"
                style={{
                    display: 'block',
                    width: '100%',
                    }}
            />
            </Grid>
            <Grid item xs={3}> 
            <Img
                src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                loading="lazy"
                style={{
                    display: 'block',
                    width: '100%',
                    }}
            />
            </Grid>
            <Grid item xs={3}> 
            <Img
                src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                loading="lazy"
                style={{
                    display: 'block',
                    width: '100%',
                    }}
            />
            </Grid> 
            <Grid item xs={1.5}> 
                <ArrowCircleRightIcon/>
            </Grid>
        </Grid>
        {/* <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack> */}
      </Grid>
    </Item>
  );
}

export default HomeContent;
