import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      google: props.google,
      data: props.data,
      showMap: true,
      showingInfoWindow: false,
      activeMarker: {},
    };
  }

  mapStatus = () => {
    this.setState(state => ({
      showMap: !state.showMap,
    }));
  };

  onMarkerClick = (props, marker) => {
    return this.setState({
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

  infoWindow = () => {
    const { activeMarker, showingInfoWindow } = this.state;

    return (
      <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
        <div>
          <h1>{showingInfoWindow && activeMarker.name}</h1>
        </div>
      </InfoWindow>
    );
  };

  marker = element => (
    <Marker
      key={Math.random()}
      onClick={this.onMarkerClick}
      name={element.venueName}
      position={{ lat: element.venueLat, lng: element.venueLon }}
    />
  );

  markers = () => {
    const { data } = this.state;

    return data.map(element => this.marker(element));
  };

  render() {
    const { google, showMap } = this.state;
    return (
      <>
        <button type="button" onClick={this.mapStatus}>
          Show / Hide Map
        </button>
        {showMap && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 13.5943885, lng: -85.9526044 }}
            onClick={this.onMapClicked}
          >
            {this.markers()}
            {this.infoWindow()}
          </Map>
        )}
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
