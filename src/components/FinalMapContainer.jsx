import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const FinalMapContainer = ({ google, markers }) => {
  const [state, setState] = useState({
    show: true,
  });

  const [infoWindow, setInfoWindow] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const handleClick = () => {
    if (state.show) {
      setState({ show: false });
    } else {
      setState({ show: true });
    }
  };

  const onMarkerClick = (props, marker, e) =>
    setInfoWindow({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  const onMapClicked = props => {
    if (infoWindow.showingInfoWindow) {
      setInfoWindow({
        selectedPlace: props,
        activeMarker: null,
        showingInfoWindow: false,
      });
    }
  };

  return (
    <React.Fragment>
      <button type="button" onClick={handleClick}>
        {state.show ? 'Hide Map' : 'Show Map'}
      </button>
      <div className="MapContainer">
        <Map
          onClick={onMapClicked}
          visible={state.show}
          classNAme="Map"
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {markers.map(marker => (
            <Marker
              onClick={onMarkerClick}
              key={marker.venueName}
              name={marker.venueName}
              position={{ lat: marker.venueLat, lng: marker.venueLon }}
            />
          ))}

          <InfoWindow
            marker={infoWindow.activeMarker}
            visible={infoWindow.showingInfoWindow}
          >
            <div>
              <h1>{infoWindow.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    </React.Fragment>
  );
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(FinalMapContainer);
