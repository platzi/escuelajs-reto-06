import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  render() {
    const {showMap, google, locations} = this.props;
    const {activeMarker, showingInfoWindow, selectedPlace} = this.state;

    if (showMap) {
      return (
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {
            locations.map(item => (
              <Marker
                key={item.venueName}
                position={{ lat: item.venueLat, lng: item.venueLon }}
                name={item.venueName}
                onClick={this.onMarkerClick}
              />
              ),
            )
          }
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
          >
            <div>
              <h1>{selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      );
    }
    return (<h1> Oprime el botón para mostrar el mapa </h1>);
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
