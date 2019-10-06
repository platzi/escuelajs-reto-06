import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props,
    });
  };

  render() {
    const { google, locations } = this.props;
    const { activeMarker, showingInfoWindow, selectedPlace } = this.state;
    return (
      <Map
        google={google}
        zoom={5}
        initialCenter={{ lat: 9.5943885, lng: -87.9526044 }}
      >
        {locations.map(({ venueLat, venueLon, venueName }) => (
          <Marker
            key={venueName}
            name={venueName}
            position={{ lat: venueLat, lng: venueLon }}
            onClick={this.onMarkerClick}
          />
        ))}
        <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);