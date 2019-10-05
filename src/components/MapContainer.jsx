import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ google, markersProps }) => {
  let markerItems;
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    markerItems = markersProps.map(marker => (
      <Marker
        name={marker.venueName}
        position={{ lat: marker.venueLat, lng: marker.venueLon }}
        key={marker.venueName}
      />
    ));
    setMarkers(markerItems);
  }, []);

  return (
    <Map
      google={google}
      zoom={4}
      initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
    >
      {markers}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
