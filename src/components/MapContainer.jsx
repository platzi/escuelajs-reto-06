import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      markers: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(markers => {
        this.setState({ markers, show: true });
      })
      .catch(err => console.log(err));
  }

  handleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  render() {
    const { google } = this.props;
    const {
      show,
      markers,
      showingInfoWindow,
      activeMarker,
      selectedPlace,
    } = this.state;
    return (
      <>
        <button
          type="button"
          onClick={this.handleShow}
          style={{ position: 'fixed', bottom: 25, left: 25, zIndex: 1000 }}
        >
          TOGGLE MAP
        </button>
        {show && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
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
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
