import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../styles/components/MapContainer.styl';

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    this.containerMapStyle = {
      height: 450,
    };
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onMapClicked = () => {
    const { showingInfoWindow } = this.state;
    if (showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const { showMap, google, markers } = this.props;
    const { activeMarker, showingInfoWindow, selectedPlace } = this.state;
    return (
      showMap &&
      (markers.length > 0 ? (
        <Map
          containerStyle={this.containerMapStyle}
          google={google}
          zoom={4}
          onClick={this.onMapClicked}
          initialCenter={{ lat: 14.5943885, lng: -87.9526044 }}
        >
          {markers.map(marker => (
            <Marker
              key={marker.venueName}
              onClick={this.onMarkerClick}
              name={marker.venueName}
              position={{ lat: marker.venueLat, lng: marker.venueLon }}
            />
          ))}
          <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
            <div className="marker-info-container">
              <h4>{selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      ) : (
        <h5 id="loadingMarkersText">Cargando sedes...</h5>
      ))
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
