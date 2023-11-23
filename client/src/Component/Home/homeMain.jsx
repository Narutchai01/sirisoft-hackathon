import * as React from "react";
import Grid from "@mui/material/Grid";
import HomeContent from "./HomeContent";
import MallData from "../Data/MallData.js";
import { useState, useEffect } from "react";

//Get user location
const API_KEY = "AIzaSyCZBeJA2Iq-vVE3HmLe_xqw_g7S6YQIWmg";
function userLocation() {
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

// Function to calculate distance between two points by GPT
function calculateDistance(point1, point2) {
  const R = 6371; // Radius of the Earth in kilometers
  const lat1 = deg2rad(point1.lat);
  const lat2 = deg2rad(point2.lat);
  const lon1 = deg2rad(point1.lng);
  const lon2 = deg2rad(point2.lng);

  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
}

// Function to convert degrees to radians
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// Function to fetch nearby places
async function fetchNearbyPlaces(location) {
  try {
    //using google place api > nearby search
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=10000&key=${API_KEY}`
    );

    const data = await response.json();

    return data.results.slice(0, 10).map((place) => {
      const placeLocation = {
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
      };

      const distance = calculateDistance(location, placeLocation);
      console.log(place);

      return {
        name: place.name,
        distance: `${distance.toFixed(2)} km`,
        address: place.formatted_address,
      };
    });
  } catch (error) {
    console.error("Error fetching nearby places:", error);
    return [];
  }
}


export default function HomeMain() {
  const location = userLocation();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const placesData = await fetchNearbyPlaces(location);
      setPlaces(placesData);
    };

    fetchPlaces();
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
