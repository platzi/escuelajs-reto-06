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
        zoom={4}
        initialCenter={{ lat: 4.6560716, lng: -74.0595918 }}
      >
        {locations.map(({ venueLat, venueLon, venueName }) => (
          <Marker          
          key={venueName}
          name={venueName}
          lat={venueLat}
          lon={venueLon}
          position={{ lat: venueLat, lng: venueLon }} 
          onClick={this.onMarkerClick}
          />
        ))}
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}>
            <div>
              <h2>{selectedPlace.name}</h2>
              <h3>{selectedPlace.lat}</h3>
              <h3>{selectedPlace.lon}</h3>
            </div>
        </InfoWindow>
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);