import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MallData from '../Data/MallData';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Popup = styled(Paper)({
    borderRadius: 6,
    boxShadow: "0px 5px 20px 0px #ccc",
    padding: '25px',
    paddingBottom : '15px',
});

const MallSearch = ({ mallSearch }) => {
    console.log(mallSearch);
    const [matches, setMatches] = useState([]);

    const filterData = () => {
        const filteredMatches = MallData.filter((item) =>
            item.mallName.toLowerCase().includes(mallSearch.toLowerCase())
        );
        setMatches(filteredMatches);
    };

    useEffect(() => {
        filterData();
    }, [mallSearch]);

    if (mallSearch.trim() === '') {
        return null;
    }

    return (
        <Popup>
            {matches.length === 0 ? (
                <p>No matches found.</p>
            ) : (
                <ul style={{ listStyle: 'none' }}>
                    {matches.map((match, index) => (
                        <Grid>
                            <Grid container key={index}>
                                <Grid item container xs={4} justifyContent='center'> 
                                    <Grid item xs={2}/> 
                                    <Grid item xs={6}> {match.mallName}  </Grid>
                                    <Grid item xs={4}/> 
                                </Grid>
                                <Grid item xs={8} fontSize={10} color='gray'>{match.mallPosition}</Grid> 
                            </Grid>
                            <Box marginY={2} width='100%' borderBottom={1} borderColor='#ccc'></Box>
                        </Grid>
                    ))}
                </ul>
            )}
        </Popup>
    );
};

export default MallSearch;
