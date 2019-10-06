/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
class MapContainer extends Component {

  state = {
    selectedPlace: {},
    activeMarker: {},
    showingInfoWindow: false,
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });

  render() {
    const { activeMarker, showingInfoWindow, selectedPlace } = this.state;
    const { locations, isShow, google } = this.props;
    
    return !isShow ? <h2>haz clic para habilitar el mapa</h2> : (
      <Map
        google={google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
        {
          locations.map((location) => (
            <Marker
              onClick={this.onMarkerClick}
              position={{ lat: location.venueLat, lng: location.venueLon }}
              name={location.venueName}
              key={location.venueName}
            />
          )
          )
        }
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
        >
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);