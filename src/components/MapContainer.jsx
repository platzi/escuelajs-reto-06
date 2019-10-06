import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={4}
      initialCenter={{lat: 19.4267261, lng: -99.1718706 }}
    >
      <Marker
        name='Platzi HQ CDMX'
        position={{ lat: 19.4267261, lng: -99.1718706 }}
      />
      <Marker
        name='Platzi HQ Bogota'
        position={{lat: 4.6560716, lng: -74.0595918}} 
      />
      <Marker />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
  language: 'spanish'
})(MapContainer);