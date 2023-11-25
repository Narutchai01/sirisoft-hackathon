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
        { floor: '1', image: 'https://drive.google.com/uc?export=view&id=122YdkCupNpOP4Qgp3jh70CNPXMbPSV2F' },
        { floor: '2', image: 'https://drive.google.com/uc?export=view&id=1yJbEjrOQku23acIEz4cQwml4ZUvAuQ-J' },
        { floor: '3', image: 'https://i.pinimg.com/564x/b5/f8/0e/b5f80e178e9b16a3956e02a7e4fe7be5.jpg' },
        { floor: '4', image: 'https://i.pinimg.com/564x/b5/f8/0e/b5f80e178e9b16a3956e02a7e4fe7be5.jpg' },
    ];

return (
    <Grid container borderLeft='1px solid #AAA' spacing={2}>
    <Grid item xs={6}>
        <TextField
            fullWidth
            select
            label="Select"
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
