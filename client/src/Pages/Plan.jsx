import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Plan() {
  useEffect(() => {
    const sendLocation = async () => {
      await axios.post("http://localhost:3000/api/routesplan", location).then((res) => {
        console.log(res.data);
      });
    };
    sendLocation();
  }, [location]);

  return (
    <Grid>
        <Link style={{textDecoration: 'none'}} to='/'>Home </Link>
    </Grid>
  );
}