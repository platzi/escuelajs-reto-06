import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class MapContainer extends Component {

  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
  };

  constructor() {
    super();
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  handleMarkerClick(props, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  render() {
    const { showingInfoWindow, activeMarker, selectedPlace } = this.state;
    return (
        <Map
          google={this.props.google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {
            this.props.locations.map(marker => (
              <Marker
                key={marker.venueName}
                position={{ lat: marker.venueLat, lng: marker.venueLon }}
                onClick={this.handleMarkerClick}
                name={marker.venueName}
              />
            ))
          }
          <InfoWindow
            visible={showingInfoWindow}
            marker={activeMarker}
          >
            <p className="place">{selectedPlace.name}</p>
          </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
