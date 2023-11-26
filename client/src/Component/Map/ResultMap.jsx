import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class ResultMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: { lat: 13.745704, lng: -73.954298 },
    };
  }

  render() {
    const apiIsLoaded = (map, maps) => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = { lat: 13.745704, lng: 100.535912 };
      const destination = { lat: 13.746944, lng: 100.539719 };

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
            defaultCenter={{ lat: 13.745704, lng: 100.535912 }}
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
