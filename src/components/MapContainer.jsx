import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google, markersProps }) => {
  const [markers, setMarkers] = useState([]);
  const [venue, setVenue] = useState({});

  const showInfoWindow = marker => {
    setVenue(marker);
  };

  useEffect(() => {
    const markerItems = markersProps.map(marker => (
      <Marker
        name={marker.venueName}
        position={{ lat: marker.venueLat, lng: marker.venueLon }}
        key={marker.venueName}
        onClick={showInfoWindow}
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
      {markers && (
        <InfoWindow position={venue.position} visible>
          <div>
            <h1>{venue.name}</h1>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
