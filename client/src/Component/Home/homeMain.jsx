// import * as React from "react";
import Grid from "@mui/material/Grid";
import HomeContent from "./HomeContent";
import MallData from "../Data/MallData.js";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomeMain() {

  const [distance, setDistance] = useState([]);
  const [location, setLocation] = useState({
    lat: 13.745704,
    lng: 100.535912
  });

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setLocation({
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     });
  //   });
  // }, []);
  


  useEffect(() => {
    const sendLocation = async () => {
      if (location.lat === 0 && location.lng === 0) {
        return false;
      }
      await axios.post("http://localhost:3000/api/calculatedistance", location).then((res) => {
        // console.log(res.data);
        setDistance(res.data);
        // console.log(location.lat, location.lng);
      });
    };
    sendLocation();
  }, [location]);

  console.log(distance);

  const getMallData = (mallDataObj) => {
    const matchingDistance = distance.find((dist) => dist.place_id === mallDataObj.placeId);

    if (matchingDistance) {
      return (
        <Grid item xs={4} key={mallDataObj.placeId}>
          <HomeContent {...mallDataObj} distance={matchingDistance.distance}/>
        </Grid>
      );
    }

    return null;
  };

  const filteredMallData = MallData.filter((mallDataObj) => {
    const matchingDistance = distance.find((dist) => dist.place_id === mallDataObj.placeId);
    return !!matchingDistance; // Keep only if matching distance is found
  });
  return (
    <Grid container direction="column" spacing={3}>
      {filteredMallData.map((mallDataObj) => getMallData(mallDataObj))}
    </Grid>
  );
}
