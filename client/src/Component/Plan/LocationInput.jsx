import { useState} from 'react';
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
    const [dropdown, setDropdown] = useState();

    const [destination, setDestination] = useState({
        place: '',
    });

    const handleChangeFindPlace = (event) => {
        setDestination(event.target.value);
        axios.post('http://localhost:3000/api/findplace', { destination})
            .then(res => {
                console.log(res.data);
                setDropdown(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }



    console.log(dropdown);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {/* <TextField fullWidth label="Origin" variant="outlined" value={origin} /> */}
                <br /><br />
                <TextField fullWidth label="Destination" name='dilect' variant="outlined" onChange={handleChangeFindPlace} />
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
            <Grid item xs={12}>
                <Button variant="contained" >Get Directions</Button>
            </Grid>
        </Grid>
    );
}
