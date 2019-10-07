import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showingInfoWindow: false,
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
    console.log(props.location);
    console.log(marker);
    console.log(e);
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const { google, locations } = this.props;
    const { show } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state === true ? 'Ocultar Mapa' : 'Mostar Mapa'}
        </button>

        <Map
          google={google}
          visible={show}
          onClick={this.onMapClicked}
          zoom={3}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {locations.length > 0 &&
            locations.map((location, idx) => (
              <Marker
                key={idx}
                name={location.venueName}
                position={{ lat: location.venueLat, lng: location.venueLon }}
                onClick={this.onMarkerClick}
              />
            ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
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
