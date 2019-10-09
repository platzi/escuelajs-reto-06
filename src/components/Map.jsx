import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MyMap = ({ google, markers }) => {
  console.log(markers);
    return (
      <Map
        google={google}
        zoom={4}
        initialCenter={{ lat: 19.5943885, lng: -84.9526044 }}
      >
        {
          markers.map((marker, idx) => {
            const { venueLat, venueLon, venueName } = marker;
            return (
              <Marker
                key={idx}
                name={venueName} 
                position={{ lat: venueLat, lng: venueLon }}
              />
            )
          })
        }
      </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MyMap);