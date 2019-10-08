import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component{
  
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

    render() {
      return (
        <Map
          google={google}
          zoom={3}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          onClick={this.onMapClicked}
        >

          <Marker 
            onClick={this.onMarkerClick}
            name={ 'Platzi HQ Mexico' }
            position={{ lat: 19.5943885, lng: -97.9526044 }}
          />
          <Marker 
            onClick={this.onMarkerClick}
            name={ 'Platzi HQ Bogota' }
            position={{ lat: 4.6560716, lng: -74.0595918 }}
          />

          <InfoWindow
            marker={ this.state.activeMarker }
            visible={ this.state.showingInfoWindow }>
            <div>
              <h1>{ this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);