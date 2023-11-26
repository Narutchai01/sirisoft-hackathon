import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function MallMain() {
    const [selectedFloor, setSelectedFloor] = React.useState('1');

    const handleFloorChange = (event) => {
        setSelectedFloor(event.target.value);
    };

    const floorOptions = [
        { floor: '1', image: 'http://mallbangkok.com/wp-content/uploads/2023/04/centralworld_1-scaled.jpg' },
        { floor: '2', image: 'http://mallbangkok.com/wp-content/uploads/2023/04/centralworld_2-scaled.jpg' },
        { floor: '3', image: 'http://mallbangkok.com/wp-content/uploads/2023/04/centralworld_3-scaled.jpg' },
        { floor: '4', image: 'http://mallbangkok.com/wp-content/uploads/2023/04/centralworld_4-scaled.jpg' },
        { floor: '5', image: 'http://mallbangkok.com/wp-content/uploads/2023/04/centralworld_5-scaled.jpg' },
        { floor: '6', image: 'http://mallbangkok.com/wp-content/uploads/2023/04/centralworld_6-scaled.jpg' },
        { floor: '7', image: 'http://mallbangkok.com/wp-content/uploads/2023/04/centralworld_7-scaled.jpg' },
    ];

return (
    <Grid container spacing={2}>
    <Grid item xs={6}>
        <TextField
            fullWidth
            select
            label="Select Floor"
            variant="outlined"
            value={selectedFloor}
            onChange={handleFloorChange}
        >
        {floorOptions.map((option) => (
            <MenuItem key={option.floor} value={option.floor}>
                {option.floor}
            </MenuItem>
        ))}
        </TextField>
    </Grid>
        <div
        style={{
            width: '100%',
            padding: '20px',
            marginBottom: '20px',
            overflowX: 'auto',
        }}
        >
        <img
            style={{ width: '100%', height: 'auto' }}
            src={floorOptions.find((option) => option.floor === selectedFloor)?.image || ''}
            alt={`Floor ${selectedFloor}`}
        />
        </div>
    </Grid>
    );
}
