//import Zone
import express from "express";
const cors = require("cors");
const axios = require("axios");
const API_KEY = "AIzaSyCZBeJA2Iq-vVE3HmLe_xqw_g7S6YQIWmg";

// define zone
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);
const port = 3000;

// routes
app.post("/api/googlemap");

function calculateDistance(point1: { lat: number; lng: number }, point2: { lat: number; lng: number }): number{
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
function deg2rad(deg: number): number  {
  return deg * (Math.PI / 180);
}
async function performNearbyPlaces(location: { lat: number; lng: number }): Promise<any[]>  {
  try {
    //using google place api > nearby search
    const response = await axios.post(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=10000&key=${API_KEY}`
    );

    const data = await response.json();

    return data.results.slice(0, 10).map((place: { geometry: { location: { lat: any; lng: any; }; }; name: any; formatted_address: any; }) => {
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
    throw error;
  }
}

app.post("/api/nearby-places", async (req, res) => {
  try {
    const { lat, lng } = req.body;

    if (!lat || !lng) {
      return res.status(400).json({ error: 'Invalid or missing location parameters' });
    }

    const userLocation = { lat: parseFloat(lat), lng: parseFloat(lng)};
    const nearbyPlaces = await performNearbyPlaces(userLocation);
    res.json({ nearbyPlaces });
  } catch (error) {
    console.error('Error handling Nearby Places request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// listen
app.listen(port, () => {
  console.log(`Server started on at http://localhost:${port}`);
});
