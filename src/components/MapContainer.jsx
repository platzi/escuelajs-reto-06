import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  render() {
    const MapState = this.state;
    const { estado } = this.props;

    return estado.show ? (
      <div className="Mapa__main--toogle-none">
        <Map
          google={google}
          onClick={this.onMapClicked}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {estado.locations.map((positionPlatzi, key) => (
            <Marker
              name={positionPlatzi.venueName}
              onClick={this.onMarkerClick}
              position={{
                lat: positionPlatzi.venueLat,
                lng: positionPlatzi.venueLon,
              }}
              key={key}
            />
          ))}

          <InfoWindow
            marker={MapState.activeMarker}
            visible={MapState.showingInfoWindow}
          >
            <div>
              <h1>{MapState.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    ) : null;
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
