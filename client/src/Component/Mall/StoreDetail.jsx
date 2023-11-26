import React from 'react'
import { Typography, Grid } from '@mui/material'

const details = [
    { id: '0', type: 'Restaurants', code: '#73fd47'},
    { id: '1', type: 'Food, Drink', code: '#00ab09'},
    { id: '2', type: 'Cafe, Dessert', code: '#56ffe6'},
    { id: '3', type: 'Fashion', code: '#ff8882'},
    { id: '4', type: 'Cosme, Pharma', code: '#ff7cbe'},
    { id: '5', type: 'Eye wear', code: '#fffd5d'},
    { id: '6', type: 'Gold Jewel', code: '#ff860d'},
    { id: '7', type: 'Bank, Finance', code: '#f30012'},
    { id: '8', type: 'Commodity', code: '#3cbaff'},
    { id: '9', type: 'Electronics', code: '#6b72fe'},
    { id: '10', type: 'Activity', code: '#006ab1'},
    { id: '11', type: 'Body Service', code: '#ca1670'},
    { id: '12', type: 'Misc Service', code: '#878787'}
]

const StoreDetail = () => {
return (
    <>
        {details.map((detail) => (
            <Grid container key={detail.id}>
                <Grid item container alignItems='center' paddingBottom={1.25} xs={1}>
                    <Grid bgcolor={detail.code} style={{ borderRadius: '5px', width: '20px', height: '20px'}} />
                </Grid>
                <Grid item xs={11}>
                    <Grid>
                        <Typography variant='h6' color='grey' paddingBottom={1} paddingLeft={1}>{ detail.type }</Typography>
                    </Grid>
                </Grid>
            </Grid>
        ))}
    </>
    )
}

export default StoreDetail