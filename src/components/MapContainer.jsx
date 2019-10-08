import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const API = 'http://localhost:3000/locations';

class MapContainer extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      markers: {
        error: {},
        result: {},
      },
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.toggleMapVisibility = this.toggleMapVisibility.bind(this);
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(locations => {
        this.setState({
          markers: {
            error: '',
            result: locations,
          },
        });
      })
      .catch(error => {
        this.setState({
          markers: {
            error: `Algo salió mal: ${error}`,
            result: '',
          },
        });
      });
  };

  onMarkerClick(props, marker) {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });
  };

  toggleMapVisibility = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { google } = this.props;
    const {
      show,
      showingInfoWindow,
      activeMarker,
      selectedPlace,
      markers,
    } = this.state;

    return (
      <section>
        <button
          type="button"
          className="btn"
          onClick={this.toggleMapVisibility}
        >
          {show ? 'Hide map' : 'Show map'}
        </button>
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          className={show ? 'mapShown' : 'mapHidden'}
        >
          {markers.result.length > 0 &&
            markers.result.map(marker => (
              <Marker
                key={marker.venueName}
                position={{ lat: marker.venueLat, lng: marker.venueLon }}
                name={marker.venueName}
                onClick={this.onMarkerClick}
              />
            ))}
          <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
            <div>
              <h2>{selectedPlace.name}</h2>
            </div>
          </InfoWindow>
        </Map>
      </section>
    );
  };
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
