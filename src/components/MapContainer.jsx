import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../styles/components/MapContainer.styl';

const MapContainer = ({ locations, google }) => {
  const [mapContainerState, setMapContainerState] = useState({
    show: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  });
  const handleClickShowMap = () => {
    setMapContainerState({
      show: !mapContainerState.show,
    })
  };
  const handleMarkerClick = (props, marker) => {
    setMapContainerState({
      ...mapContainerState,
      placeName: props.name,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };
  const handleMapClick = () => {
    if (mapContainerState.showingInfoWindow) {
      setMapContainerState({
        ...mapContainerState,
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  return (
    <div className="map-conatiner">
      <div className="content-button">
        <button
          type="button"
          className="btn-show-map"
          onClick={handleClickShowMap}
        >
          {mapContainerState.show ? 'Ocultar mapa' : 'Mostrar mapa'}
        </button>
      </div>
      <div className="contend-map">
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={mapContainerState.show}
          onClick={handleMapClick}
        >
          {locations.map((location, index) => (
            <Marker
              key={`location${index}`}
              name={location.venueName}
              title={`Oficina ${location.venueName}`}
              onClick={handleMarkerClick}
              position={{
                lat: location.venueLat,
                lng: location.venueLon
              }}
            />
          ))}
          <InfoWindow
            marker={mapContainerState.activeMarker}
            visible={mapContainerState.showingInfoWindow}
          >
            <h1>{mapContainerState.placeName}</h1>
          </InfoWindow>
        </Map>
      </div>

    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);