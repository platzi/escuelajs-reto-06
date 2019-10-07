/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  state = { 
    // eslint-disable-next-line react/no-unused-state
    google,
    visibility: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  toggleMap = () => {
    const {visibility} = this.state;
    let stateCurrent = false;
    if (visibility) {
      stateCurrent = false;
    } else {
      stateCurrent = true;
    }
      
    this.setState({
      visibility: stateCurrent,
    });
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = ({showingInfoWindow}) => {
    if (showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const {visibility, google, activeMarker, showingInfoWindow, selectedPlace} = this.state;
    const {locations} = this.props;

    return (
      <>
        <button type="button" onClick={this.toggleMap}>Mapa</button>
        {visibility && (
          <Map
            google={google}
            onClick={this.onMapClicked}
            zoom={4}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          > 
            {locations.map((marker) => <Marker onClick={this.onMarkerClick} key={marker.venueName} position={{ lat: marker.venueLat, lng: marker.venueLon }} name={marker.venueName} />)}

            <InfoWindow
              marker={activeMarker}
              visible={showingInfoWindow}
            >
              <div>
                <h1>{selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        )}
      </>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
