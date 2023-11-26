import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import axios from 'axios';
import LocationSearch from '../Search/LocationSearch';

class LocationInput extends Component {
    //   constructor(props) {
    //     super(props);

    //     this.state = {
    //       currentLocation: { lat: 40.756795, lng: -73.954298 },
    //     };
    //   }


    render() {
        const apiIsLoaded = (map, maps) => {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
            const origin = { lat: user.lat, lng: user.lng };
            const destination = { lat: deslat, lng: -78.954298 };

            directionsService.route(
                {
                    origin: origin,
                    destination: destination,
                    travelMode: google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(result);
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        };
        const user = {
            lat: 13.745704,
            lng: 100.535912
        };
        const des = {
            lat: res.data.result.deslat,
            lng: res.data.result.deslng
        };

        const timeOptions = [
            { value: 'driving', label: 'Private' },
            { value: 'transit', label: 'Public' },
        ];


        const [location, setLocation] = useState({
            lat: 13.745704,
            lng: 100.535912
        });
        const [distance, setDistance] = useState([]);
        const [dropdown, setDropdown] = useState([]);
        const [destination, setDestination] = useState({
            place: '',
        });
        const [isSearchFocused, setIsSearchFocused] = useState(false);
        const [selectedDescription, setSelectedDescription] = useState('');
        const [selectedMode, setSelectedMode] = useState('');
        const [placeId, setPlaceId] = useState('');
        const [time, setTime] = useState('');

        const [form, setForm] = useState([]);

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
                    console.log(err);
                });
        };



        useEffect(() => {
            setForm([
                {
                    location: location,
                    placeId: placeId,
                    time:
                    {
                        h: time.$H,
                        m: time.$m
                    }
                    ,
                    mode: selectedMode,
                }
            ]);
        }, [placeId, time, selectedMode, location]);

        const handleSubmit = (event) => {
            try {
                event.preventDefault();
                const dataFrom = {
                    lat: location.lat,
                    lng: location.lng,
                    placeId: placeId,
                    time:
                    {
                        h: time.$H,
                        m: time.$m
                    }
                    ,
                    mode: selectedMode,
                }
                axios.post('http://localhost:3000/api/direction', dataFrom)
                    .then(res => {
                        console.log(res.data);
                        console.log(dataFrom);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } catch (error) {
                console.log(error);
            }
        };




        return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            value={selectedDescription || destination.place}
                            label="Choose destination"
                            variant="outlined"
                            onFocus={handleFocus}
                            onChange={handleChangeFindPlace}
                        />
                        {isSearchFocused && (
                            <LocationSearch
                                dropdown={dropdown}
                                onDescriptionClick={handleDescriptionClick}
                            />
                        )}
                    </Grid>
                    <Grid item container xs={2.5}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                                <TimePicker label="Arrival time" value={time} onChange={handleTimeChange} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item container xs={9.5} marginTop={1}>
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
                        <Button variant="contained" style={{ backgroundColor: '#FF5757' }} onClick={handleSubmit}>Get Directions</Button>
                    </Grid>
                </Grid>
                <div>
                    <div style={{ height: '400px', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: 'AIzaSyCZBeJA2Iq-vVE3HmLe_xqw_g7S6YQIWmg',
                            }}
                            defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
                            defaultZoom={10}
                            center={user}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
                        />
                    </div>
                </div>
            </>
        );
    }
}
export default LocationInput;
