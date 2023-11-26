import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {matches.map((match, index) => (
                        <Grid key={index}>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                to={{
                                    pathname: `/mall/${encodeURIComponent(match.mallName)}`,
                                    search: `?iconImg=${encodeURIComponent(match.iconImg)}`,
                                }}
                            >
                                <Grid item xs={3} justifyContent='center'>
                                    <Grid item xs={12}>{match.mallName}</Grid>
                                </Grid>
                                <Grid item xs={7} fontSize={10} color='gray'>
                                    {match.mallPosition}
                                </Grid>
                            </Link>
                            <Box marginY={2} width='100%' borderBottom={1} borderColor='#ccc'></Box>
                        </Grid>
                    ))}
                </ul>
            )}
        </Popup>
    );
};

export default MallSearch;
