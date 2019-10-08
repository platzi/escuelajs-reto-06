import React, { useState } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import setInitialState from '../hooks/setInitialState';

const API = 'http://localhost:3000/locations';

const MapContainer = ({ google }) => {

  const initialState = setInitialState(API);

  const [mapState, setMapState] = useState({
    show: false,
    text: 'Mostrar Mapa',
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const handleClick = () => {
    setMapState({
      ...mapState,
      show: !mapState.show,
      text: !mapState.show ? "Ocultar Mapa" : "Mostrar Mapa"
    })
  }

  const onMarkerClick = (props, marker) => {
    setMapState({
      ...mapState,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  const onMapClicked = () => {
    if (mapState.showingInfoWindow) {
      setMapState({
        ...mapState,
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  return (
    <div>
      {
        mapState.show && initialState.locations.length > 0 && (
          <Map
            onClick={onMapClicked}
            className="Map"
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {
              initialState.locations.map((place) =>
                (
                  <Marker
                    key={Math.random()}
                    onClick={onMarkerClick}
                    name={place.venueName}
                    position={{ lat: place.venueLat, lng: place.venueLon }}
                  />
                )
              )
            }

            <InfoWindow
              marker={mapState.activeMarker}
              visible={mapState.showingInfoWindow}
            >
              <div>
                <h1>{mapState.selectedPlace.name}</h1>
              </div>
            </InfoWindow>

          </Map>
        )
      }
      <button
        type="button"
        onClick={handleClick}
      >
        {mapState.text}
      </button>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);