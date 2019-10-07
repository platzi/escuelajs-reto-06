import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = props => {
  const { google, locations } = props;
  const [activeMaker, setActiveMaker] = useState({
    selectedPlace: null,
    activeMarker: null,
    showingInfoWindow: true,
  });
  const [showMapStatus, setShowMapStatus] = useState(true);
  const onMarkerClick = (propsMaker, marker) => {
    setActiveMaker({
      selectedPlace: propsMaker,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };
  return (
    <div>
      <Map
        google={google}
        zoom={5}
        visible={showMapStatus}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
        {locations.map(location => (
          <Marker
            key={location.venueLat + location.venueLon}
            position={{ lat: location.venueLat, lng: location.venueLon }}
            onClick={(propsMaker, marker) => onMarkerClick(propsMaker, marker)}
            name={location.venueName}
          />
        ))}
        <InfoWindow
          marker={activeMaker.activeMarker}
          visible={activeMaker.showingInfoWindow}
        >
          <div>
            <h1>
              {activeMaker.selectedPlace && activeMaker.selectedPlace.name}
            </h1>
          </div>
        </InfoWindow>
      </Map>
      <button
        type="button"
        onClick={() => {
          setShowMapStatus(!showMapStatus);
        }}
        className="button-hide-show"
      >
        {showMapStatus ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
