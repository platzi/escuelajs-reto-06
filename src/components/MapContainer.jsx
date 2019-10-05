import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const places = {
  'bogota' : {
    lat: 4.6560716,
    lng: -74.0595918,
  },
  'mexico' : {
    lat: 19.4267261,
    lng: -99.1718706,
  }
}
console.log(places.mexico);
const MapContainer = ({ google }) => {
  return (
    //visto en el viewport
    <Map
      google={google}
      zoom={5}
      initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}//punto central del mapa
    >
      <Marker
        position={ places.mexico }//México
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);