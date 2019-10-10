import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../styles/containers/MapContainer.styl';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    const { data } = props
    this.state = {
      show: false,
      markers: data,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  handleMapVisibility = () => {
    const { show } = this.state;
    if (show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClick = props => {
    const { showingInfoWindow } = this.state;
    if (showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };


  render() {
    const {
      show,
      markers,
      activeMarker,
      showingInfoWindow,
      selectedPlace,
    } = this.state;
    const { google } = this.props;
    return (
      <div>
        <button type="button" className="button" onClick={this.handleMapVisibility}>
          {!show ? 'Mostrar mapa' : 'Ocultar Mapa'}
        </button>
        <Map          
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={show}
          onClick={this.onMapClick}
        >
          {markers.map(item => (
            <Marker
              key={item.venueName}
              name={item.venueName}
              position={{ lat: item.venueLat, lng: item.venueLon }}
              onClick={this.onMarkerClick}
            />
          ))}
          <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
            <div>
              <h1>{selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);