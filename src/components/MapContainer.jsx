import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

// eslint-disable-next-line react/prefer-stateless-function
class MapContainer extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      show: false,
      markers: data,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  /**
   * Shows and hides the map.
   */
  handleMapVisibility = () => {
    const { show } = this.state;
    if (show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  /**
   * Displays the marker's info.
   */
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  /**
   * If the map is clicked, hides the marker.
   */
  onMapClicked = props => {
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
        <button type="button" onClick={this.handleMapVisibility}>
          Mostrar Mapa
        </button>
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={show}
          onClick={this.onMapClicked}
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
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
