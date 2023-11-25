import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import axios from 'axios';
import LocationSearch from '../Search/LocationSearch';

export default function LocationInput() {
    const timeOptions = [
        { value: 'driving', label: 'Private' },
        { value: 'transit', label: 'Public' },
    ];
    const [dropdown, setDropdown] = useState([]);
    const [destination, setDestination] = useState({
        place: '',
    });
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedTime, setSelectedTime] = useState([]);
    

    const [travelMode, setTravelMode] = React.useState('');
    const [time, setTime] = React.useState('');
    const [destination, setDestination] = React.useState('');
    // console.log(destination);
    console.log(time);
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

    const handleChangeFindPlace = (event) => {
        const newDestination = event.target.value;

        setDestination(newDestination);
        setSelectedDescription(''); // Clear the selected description when a new place is selected

        axios.post('http://localhost:3000/api/findplace', { destination: newDestination })
            .then(res => {
                console.log(res.data);
                setDropdown(res.data.predictions || []);
            })
            .catch(err => {
                console.log(err);
            });
    };

    console.log(dropdown);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <br /><br />
                <TextField
                    fullWidth
                    value={selectedDescription || destination.place}
                    label="Destination"
                    variant="outlined"
                    onFocus={handleFocus}
                    onChange={handleChangeFindPlace}
                />
                { isSearchFocused && (
                    <LocationSearch
                        dropdown={dropdown}
                        onDescriptionClick={handleDescriptionClick}
                    />
                )}
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
                >
                    {timeOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" >Get Directions</Button>
            </Grid>
        </Grid>
    );
}
