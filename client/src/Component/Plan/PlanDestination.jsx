import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function PlanDestination() {
    const timeOptions = [
        { value: 'Self', label: 'Self' },
        { value: 'Public', label: 'Public' },
    ];

    return (
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField fullWidth label="Destination" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
            <TextField fullWidth label="Time" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
            <TextField
            fullWidth
            select
            label="Select"
            variant="outlined"
            >
            {timeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </Grid>
        </Grid>
    );
}
