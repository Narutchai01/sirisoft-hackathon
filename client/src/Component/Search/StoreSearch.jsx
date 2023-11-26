import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Input as BaseInput } from '@mui/base/Input';
import MallData from '../Data/MallData';
import Typography from '@mui/material/Typography';

const Input = React.forwardRef(function CustomInput(props, ref) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

const red = {
  100: '#FF7D7D',
  200: '#FF6A6A',
  400: '#FF5757',
  500: '#E24E4E',
  600: '#C84141',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const InputElement = styled('input')(({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 16px;
    width: 16.75vw;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid #C4C4C4;
    box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'};

    &:hover {
        border-color: ${red[400]};
    }

    &:focus {
        border-color: ${red[400]};
        transition: all 0.15s ease-in-out;
        scale: 1.05;
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? 'rgba( 100, 0, 0, 0.05 )' : 'rgba( 50, 0, 0, 0.05 )'};
    }

    // firefox
    &:focus-visible {
        outline: 0;
    }
`);

const StoreSearch = ({ mallName, onShopClick }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleClickShop = (shop) => {
        onShopClick(shop.shopFloor);
    };

    const filteredStores = MallData
        .filter(mall => mall.mallName === mallName)
        .flatMap(mall => mall.storeData)
        .filter(store => store.shopName.toLowerCase().includes(searchInput.toLowerCase()));

    return (
    <Grid container>
    <Input
        placeholder="Search Store..."
        onChange={handleSearchChange}
    />
    {searchInput && (
        <Grid container borderRadius={1} boxShadow={2} style={{ borderRadius: '' }} xs={12}>
        {filteredStores.map((store, index) => (
            <Grid
            item
            container
            style={{ display: 'flex', cursor: 'pointer' }}
            padding={2}
            key={index}
            onClick={() => handleClickShop(store)}
            sx={{
                '&:hover': {
                backgroundColor: 'rgba( 0, 0, 0, 0.05 )',
                },
            }}
            >
            <Grid item container paddingLeft={5} xs={8}>
                <Typography item xs={12} color='grey'>{store.shopName}</Typography>
            </Grid>
            <Grid item xs={4} color='grey' paddingTop={0.5} textAlign='center'> Floor: {store.shopFloor} </Grid>
            <Grid item xs={12} padding={0.5} borderBottom='1px solid #AAA'></Grid>
            </Grid>
        ))}
        </Grid>
    )}
    </Grid>
    );
};

export default StoreSearch;