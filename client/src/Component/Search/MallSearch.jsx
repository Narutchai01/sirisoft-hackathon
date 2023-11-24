import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Popup = styled(Paper)({
    position: 'fixed',
    top: '11%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '16px',
});

const data = [
    { mallName: 'Central Rama 2' },
    { mallName: 'Central World' },
    { mallName: 'The Mall' },
];

const MallSearch = ({ mallSearch }) => { // Added curly braces around mallSearch
    console.log(mallSearch);
    const [matches, setMatches] = useState([]);

    const filterData = () => {
        const filteredMatches = data.filter((item) =>
            item.mallName.toLowerCase().includes(mallSearch.toLowerCase())
        );
        setMatches(filteredMatches);
    };

    useEffect(() => {
        filterData();
    }, [mallSearch]); // Added mallSearch to the dependency array

    return (
        <Popup>
            {matches.length === 0 ? (
                <p>No matches found.</p>
            ) : (
                <ul>
                    {matches.map((match, index) => (
                        <li key={index}>{match.mallName}</li>
                    ))}
                </ul>
            )}
        </Popup>
    );
};

export default MallSearch;
