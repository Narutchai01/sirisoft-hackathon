import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function LocationInput() {
    const timeOptions = [
        { value: 'Drive', label: 'Drive' },
        { value: 'Motorcycle', label: 'Motorcycle' },
        { value: 'Bicycle', label: 'Bicycle' },
        { value: 'Transit', label: 'Transit' },
        { value: 'Walk', label: 'Walk' },
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField fullWidth label="Origin" variant="outlined" />
                <br /><br />
                <TextField fullWidth label="Destination" variant="outlined" />
            </Grid>
            <Grid item container xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="Time" />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <Grid item container xs={6} marginTop={1}>
                <TextField
                    fullWidth
                    select
                    label="Travel Mode"
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
