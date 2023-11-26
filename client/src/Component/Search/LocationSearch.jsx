// LocationSearch.jsx

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
    const { dropdown, onDescriptionClick } = props;
    const [isHovered, setIsHovered] = React.useState(false);

    const handleClick = (description) => {
        onDescriptionClick(description);
    };

    const handleMouseOver = () => {
        setIsHovered(true);
      };
    
      const handleMouseOut = () => {
        setIsHovered(false);
      };
      
    console.log(dropdown);
    return (
        <Popup>
        {dropdown.map((prediction, index) => (
            <Grid>
            <Grid key={index}
                    style={{
                    cursor: isHovered ? 'pointer' : 'default',
                    }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    container width='100%'  
                    onClick={() => handleClick(prediction.description)}
            >
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
