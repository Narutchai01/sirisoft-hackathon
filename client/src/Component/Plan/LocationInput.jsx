import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import axios from 'axios';

export default function LocationInput() {
    const timeOptions = [
        { value: 'Private', label: 'Private' },
        { value: 'Public', label: 'Public' },
    ];

    const [travelMode, setTravelMode] = React.useState('');
    const [time, setTime] = React.useState('');
    const [destination, setDestination] = React.useState('');
    // console.log(destination);
    // console.log(time);
    // console.log(travelMode);

    const props = {
        travelMode,
        setTravelMode,
        time,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(destination);
    }
    const handleTimeChange = (newTime) => {
        setTime(newTime);
        // console.log(time);
    }


  const [location, setLocation] = React.useState({
    lat: 13.745704,
    lng: 100.535912
  });

  React.useEffect(() => {
    const sendLocation = async () => {
      if (location.lat === 0 && location.lng === 0) {
        return false;
      }
      await axios.post("http://localhost:3000/api/direction", location).then((res) => {
        console.log(res.data);
      });
    };
    sendLocation();
  }, [location]);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {/* <TextField fullWidth label="Origin" variant="outlined" value={origin} /> */}
                <br /><br />
                <TextField fullWidth label="Destination" variant="outlined" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </Grid>
            <Grid item container xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="Time" value={setTime} onChange={handleTimeChange} />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <Grid item container xs={6} marginTop={1}>
                <TextField
                    fullWidth
                    select
                    label="Travel Mode"
                    variant="outlined"
                    value={travelMode}
                    onChange={(e) => setTravelMode(e.target.value)}
                >
                    {timeOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={handleSubmit}>Get Directions</Button>
            </Grid>
        </Grid>
    );
}
