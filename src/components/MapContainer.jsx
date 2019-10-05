import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MarkerContainer from './MarkerContainer';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        onClick={this.onMapCliked}
      >
        {this.props.locations.map(location => (
          <MarkerContainer
            key={location.venueName}
            info={this.state}
            onMarkerClick={this.onMarkerClick}
            {...location}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
