// import * as React from "react";
import Grid from "@mui/material/Grid";
import HomeContent from "./HomeContent";
import MallData from "../Data/MallData.js";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function HomeMain() {

  const [location, setLocation] = useState({
    lat: 0,
    lng: 0
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);


  useEffect(() => {
    const sendLocation = async () => {
      if (location.lat === 0 && location.lng === 0) {
        return false;
      }
      await axios.post("http://localhost:3000/api/calculatedistance", location).then((res) => {
        console.log(res.data);
        console.log(location.lat, location.lng);
      });
    };
    sendLocation();
  }, [location]);

  const getMallData = mallDataObj => {
    return (
      <Grid item xs={4}>
        <HomeContent {...mallDataObj} />
      </Grid>
    );
  }
  return (
    <Grid container direction="column" spacing={3}>
      {MallData.map(mallDataObjl => getMallData(mallDataObjl))}
    </Grid>
  );
}
