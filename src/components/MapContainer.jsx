import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ google, locations }) => {

  return (
    <Map google={google} zoom={5} initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}>
      {locations.map((item) => {
        const { id, venueName, venueLat, venueLon } = item;
        return (
          <Marker
            key={id}
            title={venueName}
            position={{ lat: venueLat, lng: venueLon }}
          />
        )
      })}
    </Map>
  )
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
