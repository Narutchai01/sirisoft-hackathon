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
    const [selectedMode, setSelectedMode] = useState('');
    const [placeId, setPlaceId] = useState('');
    const [time, setTime] = useState('');

    const [travelMode, setTravelMode] = React.useState('');
    const [time, setTime] = React.useState('');
    // const [destination, setDestination] = React.useState('');
    // console.log(destination);
    // console.log(time);
    // console.log(travelMode);
>>>>>>> origin/direction3


    const handleTimeChange = (newTime) => {
        setTime(newTime);
    }

    const handleModeChange = (event) => {
        setSelectedMode(event.target.value);
    }

    const handleDescriptionClick = (predictions) => {
        setSelectedDescription(predictions.description);
        setPlaceId(predictions.place_id);
        setIsSearchFocused(false);
    };

    const handleFocus = () => {
        setIsSearchFocused(!isSearchFocused);
    };

    const handleChangeFindPlace = (event) => {
        const newDestination = event.target.value;

        setDestination(newDestination);
        setSelectedDescription('');

        axios.post('http://localhost:3000/api/findplace', { destination: newDestination })
            .then(res => {
                setDropdown(res.data.predictions || []);
            })
            .catch(err => {
                console.log(dropdown.description);
            });
    };

    console.log(form);

    useEffect(() => {
        setForm([
            {
                placeId: placeId,
                time: [
                    {
                        h: time.$H,
                        m: time.$m
                    }
                ],
                selectedMode: selectedMode,
            }
        ]);
    }, [placeId, time, selectedMode]);

// console.log(dropdown);
console.log(dataSumbit);

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
            {isSearchFocused && (
                <LocationSearch
                    dropdown={dropdown}
                    onDescriptionClick={handleDescriptionClick}
                />
                {isSearchFocused && (
                    <LocationSearch
                        dropdown={dropdown}
                        onDescriptionClick={handleDescriptionClick}
                    />
                )}
            </Grid>
            <Grid item container xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="Enter Time" value={time} onChange={handleTimeChange} />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <Grid item container xs={6} marginTop={1}>
                <TextField
                    fullWidth
                    select
                    label="Travel Mode"
                    variant="outlined"
                    value={selectedMode}
                    onChange={handleModeChange}
                >
                    {timeOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained">Get Directions</Button>
            </Grid>
        </Grid>
    );

