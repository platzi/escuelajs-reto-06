import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    show: false,
    activeMarker: {},
    selectedPlace: {},
    showInfoWindow: false,
  }

  toggleMapVisibility = () => {
    this.setState({show:!this.state.show})
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true
    });
  }

  render(){
    const { google, locations } = this.props;
    const { show, showInfoWindow, activeMarker, selectedPlace} = this.state;
    return (
      <>
        <button onClick={this.toggleMapVisibility}>{show?'Hide':'Show map'}</button>
        <Map
          visible={show}
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {
            locations.length>0 &&
            locations.map( location => (
              <Marker
                key={location.venueName}
                onClick={this.onMarkerClick}
                position={{ lat: location.venueLat, lng: location.venueLon }}
                venueName={location.venueName}
              />
            ))
          }
          {
            locations.length>0 &&
            <InfoWindow
              marker={activeMarker}
              visible={showInfoWindow}
            >
              <div className='InfoWindow'>
                <p>{selectedPlace.venueName}</p>
              </div>
            </InfoWindow>
          }
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);