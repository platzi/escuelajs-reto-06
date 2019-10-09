import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google, locations }) => {
  const [visibility, setvisibility] = useState(false);
  const [activeMarker, setMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState([]);

  const handleInfoWindow = (props, marker) => {
    setvisibility(true);
    setMarker(marker);
    setSelectedPlace({ ...props });
  };

  return (
    <Map
      google={google}
      zoom={5}
      initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
    >
      {locations.map(item => {
        const { id, venueName, venueLat, venueLon } = item;
        return (
          <Marker
            key={id}
            title={venueName}
            position={{ lat: venueLat, lng: venueLon }}
            onClick={handleInfoWindow}
          />
        );
      })}

      <InfoWindow marker={activeMarker} visible={visibility}>
        <div>
          <h1>{selectedPlace.title}</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
