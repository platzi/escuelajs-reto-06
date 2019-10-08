import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ google, locations }) => {
  return (
    <Map
      google={google}
      zoom={5}
      initialCenter={{ lat: 12.0413988, lng: -86.6157312 }}
    >
      {
        locations.map((item) => 
          <Marker key={item.venueName} position={{ lat: item.venueLat, lng: item.venueLon }} />)
      }
    </Map>  
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
