import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";
import { useEffect, useState } from "react";

class ResultMap extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: { lat: 40.756795, lng: -73.954298 },
    };
  }

  // useEffect(() => {
  //   const sendLocation = async () => {
  //     if (location.lat === 0 && location.lng === 0) {
  //       return false;
  //     }
  //     await axios.post("http://localhost:3000/api/direction",).then((res) => {
        
  //     });
  //   };
  //   sendLocation();
  // }, []);

  render() {
    const apiIsLoaded = (map, maps) => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = res;
      const destination = { lat: 41.756795, lng: -78.954298 };

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    };
    return (
      <div>
        <div style={{ height: '400px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyCZBeJA2Iq-vVE3HmLe_xqw_g7S6YQIWmg',
            }}
            defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
            defaultZoom={10}
            center={this.state.currentLocation}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
          />
        </div>
      </div>
    );
  }
}
export default ResultMap;
