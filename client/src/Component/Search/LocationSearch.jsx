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

  const handleClick = (prediction) => {
    onDescriptionClick(prediction);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Popup>
      {dropdown.map((prediction, index) => (
        <Box key={index} onClick={() => handleClick(prediction)} style={{ cursor: 'pointer' }}>
          <Grid container width='100%' justifyContent='center'>
            <Grid item xs={2} />
            <Grid item xs={8} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              {prediction.description}
            </Grid>
            <Grid item xs={2} />
          </Grid>
          <Box marginY={2} width='100%' borderBottom={1} borderColor='#ccc'></Box>
        </Box>
      ))}
    </Popup>
  );
};

export default LocationSearch;
