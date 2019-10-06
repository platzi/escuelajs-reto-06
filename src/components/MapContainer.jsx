import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    show: false,
    markerActive: {},
    showInfoWindow: false,
    selectedPlace: {},
  };

  handleClick = () => {
    this.setState(state => ({
      show: !state.show,
    }));
  };

  handleClickMarker = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      markerActive: marker,
      showInfoWindow: true,
    });
  };

  render() {
    const { google, locations } = this.props;
    const { show, markerActive, showInfoWindow, selectedPlace } = this.state;

    return (
      <div>
        <div>
          <button onClick={this.handleClick}>Show Map</button>
        </div>
        <div>
          {show && (
            <Map
              google={google}
              zoom={4}
              initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            >
              {locations.map((location, idx) => (
                <Marker
                  key={idx}
                  name={location.venueName}
                  position={{ lat: location.venueLat, lng: location.venueLon }}
                  onClick={this.handleClickMarker}
                />
              ))}
              <InfoWindow marker={markerActive} visible={showInfoWindow}>
                <div>
                  <h6>{selectedPlace.name}</h6>
                </div>
              </InfoWindow>
            </Map>
          )}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
