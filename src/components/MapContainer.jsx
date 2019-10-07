import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../styles/containers/MapContaoner.styl';

class MapContainer extends React.Component {
  state = {
    show: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  handleClick = () => {
    this.setState = {
      show: true,
    };
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const { google, locations, state } = this.props;
    const { show } = this.state;
    return (
      <div className="MapContainer">
        <Map
          onClick={this.onMapClicked}
          visible={state}
          classNAme="Map"
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name="Platzi Mexico"
            position={{ lat: 19.4267261, lng: -99.1718706 }
            
            }
          />
          <Marker
            onClick={this.onMarkerClick}
            name="Platzi Bogotá"
            position={{ lat: 4.6560716, lng: -74.0595918 }}
          />

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
