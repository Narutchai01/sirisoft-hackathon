// import * as React from "react";
import Grid from "@mui/material/Grid";
// import HomeContent from "./HomeContent";
// import MallData from "../Data/MallData.js";
import { useEffect, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function HomeMain() {

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });


  const [map, setMap] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBkY8q3PCEZFCjDJrvIO75yHM6d3H-LzQ4'
  });

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, []);


  return isLoaded ? (
    <>
      <Grid container spacing={2}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{lat: location.lat, lng: location.lng}}
          zoom={60}
          onLoad={onLoad}
          onUnmount={onUnmount}
        ></GoogleMap>
      </Grid>
    </>
  ) :
    (
      <>
        <h1>error</h1>
      </>
    )
}
