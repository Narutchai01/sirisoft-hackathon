import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Popup = styled(Paper)({
    borderRadius: 6,
    boxShadow: "0px 5px 20px 0px #ccc",
    padding: '25px',
    paddingBottom: '15px',
});

const LocationSearch = (props) => {
    const { dropdown } = props;

    return (
        <Popup>
            {dropdown.map((prediction, index) => (
                <Grid key={index}>
                    <Grid container width='100%'>
                        <Grid item container xs={12} justifyContent='center'>
                            <Grid item xs={2} />
                            <Grid item xs={12}> {prediction.description} </Grid>
                            <Grid item xs={4} />
                        </Grid>
                    </Grid>
                    <Box marginY={2} width='100%' borderBottom={1} borderColor='#ccc'></Box>
                </Grid>
            ))}
        </Popup>
    );
};

export default LocationSearch;
