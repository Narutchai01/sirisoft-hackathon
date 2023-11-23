import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function Plan() {
  return (
    <Grid>
        <Link style={{textDecoration: 'none'}} to='/'>Home </Link>
    </Grid>
  );
}