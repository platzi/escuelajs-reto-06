import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ( {google, locations} ) => {
  
  return (
    <Map
      google={google}
      zoom={4}
      initialCenter={{lat: 19.4267261, lng: -99.1718706 }}
    >
      { 
        locations.map((sitio, index) =>{
          return (
            <Marker 
              key={index}
              name={sitio.venueName}
              position={{lat: sitio.venueLat, lng: sitio.venueLon }}
            />
          )
        })
      }
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
  language: 'spanish',
})(MapContainer);