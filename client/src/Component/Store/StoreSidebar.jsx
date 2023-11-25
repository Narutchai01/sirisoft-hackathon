import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function StoreSidebar() {
    return (
        <Grid container>
            <Typography fontSize={12} marginBottom={0.5}>5 km. Near you</Typography>
            <Typography fontSize={12}> <LocationOnIcon style={{ fontSize: '10px', marginLeft: '0px', marginRight: '5px' }} />
            This is a long wrapped text that spans multiple lines. It will adjust
            its size according to the content.
            </Typography>
        </Grid>
    );
}