import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google, locations }) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, SetActiveMarker] = useState({});
  const [selectedPlace, SetSelectedPlace] = useState({});

  const onMapClicked = () => {
    if (showInfoWindow) {
      SetActiveMarker(null); 
      setShowInfoWindow(false);
    }
  };

  const onMarkerClick = (props, marker) => {
    SetActiveMarker(marker); 
    SetSelectedPlace(props);
    setShowInfoWindow(true);
  };

  return (
    <Map
      google={google}
      zoom={5}
      initialCenter={{ lat: 12.0413988, lng: -86.6157312 }}
      onClick={onMapClicked}
    >
      {
        locations.map((item) => (
          <Marker
            key={item.venueName}
            position={{ lat: item.venueLat, lng: item.venueLon }}
            name={item.venueName}
            onClick={onMarkerClick}
          />
        ))
      }

      <InfoWindow
        marker={activeMarker}
        visible={showInfoWindow}
      >
        <div>
          <h1>{selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </Map>  
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
