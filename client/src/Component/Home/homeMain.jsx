import * as React from "react";
import Grid from "@mui/material/Grid";
import HomeContent from "./HomeContent";
import MallData from "../Data/MallData.js";
import { useState, useEffect } from "react";
import axios from "axios";

//Get user location
function useUserLocation() {
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return location;
}

// Function to fetch nearby places
const fetchNearbyPlaces = async (location) => {
  try {

    // Send the user location to the server
    const response = await fetch(`http://localhost:5000/api/nearby-places?lat=${location.lat}&lng=${location.lng}`);
    const data = await response.json();
    return data.nearbyPlaces;

    console.log(data); 
  } catch (error) {
    console.error('Error fetching nearby places:', error);
  }
};


export default function HomeMain() {
  const location = useUserLocation();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const placesData = await fetchNearbyPlaces(location);
        setPlaces(placesData);
      } catch (error) {
        console.error('Error in fetchPlaces:', error);
      }
    };

    if (location.lat && location.lng) {
      fetchPlaces();
    }
  }, [location]);
  return (
    <Grid container direction="column" spacing={3}>
      {places.map((place, index) => {
        return (
          <Grid item xs={4} key={index}>
            <HomeContent {...place} />
          </Grid>
        );
      })}
    </Grid>
  );
}
