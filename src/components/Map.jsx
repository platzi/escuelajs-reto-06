import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MyMap = ({ google, markers }) => {
  const [ place, setPlace ] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const onMarkerClick = (props, marker) => {
    setPlace({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  const onMapClicked = () => {
    if (place.showingInfoWindow) {
      setPlace({
        showingInfoWindow: false,
        activeMarker: null,
        selectedPlace: {}
      });
    }
  };
  return (
    <Map
      google={google}
      zoom={4}
      initialCenter={{ lat: 19.5943885, lng: -84.9526044 }}
      onClick={onMapClicked}
    >
      {
        markers.map((marker, idx) => {
          const { venueLat, venueLon, venueName } = marker;
          return (
            <Marker
              key={idx}
              name={venueName} 
              position={{ lat: venueLat, lng: venueLon }}
              onClick={onMarkerClick}
            />
          )
        })
      }
      <InfoWindow
        marker={place.activeMarker}
        visible={place.showingInfoWindow}
      >
        <div>
          <h1>{place.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MyMap);