import React, { Component } from 'react';
import MapButton from '../components/MapButton';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

import '../styles/components/MapContainer.styl';

class MapContainer extends Component {
  state = {
    show: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  toggleMap = () => {
    const visibleMap = this.state.show ? false : true;
    this.setState({show: visibleMap})
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render () {
    return (
      <div>
        <MapButton toggleMap={this.toggleMap} isMapVisible={this.state.show} />
        <Map
          google={this.props.google}
          style={{width: '100%', height: '400px', position: 'relative'}}
          className={'map'}
          zoom={4}
          initialCenter={{ lat: 15.1701174, lng: -89.5346629 }}
          visible={this.state.show}
        >
          {this.props.locations.map(item =>
            <Marker
              key={item.venueName}
              position={{lat: item.venueLat, lng: item.venueLon}}
              name={item.venueName}
              onClick={this.onMarkerClick}
            />
          )}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h2>{this.state.selectedPlace.name}</h2>
              </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);