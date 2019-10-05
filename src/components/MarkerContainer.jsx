import React from 'react';
import { Marker, InfoWindow } from 'google-maps-react';

const MarkerContainer = props => {
  return (
    <>
      <Marker
        google={props.google}
        map={props.map}
        mapCenter={props.mapCenter}
        position={{
          lat: props.venueLat,
          lng: props.venueLon,
        }}
        name={props.venueName}
        onClick={props.onMarkerClick}
      />
      <InfoWindow
        google={props.google}
        map={props.map}
        mapCenter={props.mapCenter}
        marker={props.info.activeMarker}
        visible={props.info.showingInfoWindow}
      >
        <div>
          <h1>{props.info.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </>
  );
};

export default MarkerContainer;
