import React from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const API = 'http://localhost:3000/locations';
// const API =
//   '/Users/luis/coding_proyects/reto_06/escuelajs-reto-06/package.json';

class MapContainer extends React.Component {
  state = {
    visible: false,
    locations: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  componentDidMount() {
    this.fetchData(API);
  }

  fetchData = async api => {
    const response = await fetch(api);
    const data = await response.json();

    this.setState({
      // eslint-disable-next-line object-shorthand
      locations: data,
    });
  };

  showMap = () => {
    if (!this.visible) {
      this.setState({
        visible: !this.state.visible,
      });
    }
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.showMap}>
          {this.state.visible ? 'Hide Map' : 'Show Map'}
        </button>

        <Map
          google={this.props.google}
          zoom={5}
          visible={this.state.visible}
          initialCenter={{
            lat: 19.42672619,
            lng: -99.1718706,
          }}
          onClick={this.onMapClicked}
        >
          {this.state.locations.map(venue => (
            <Marker
              key={venue.venueName}
              position={{ lat: venue.venueLat, lng: venue.venueLon }}
              onClick={this.onMarkerClick}
              name={venue.venueName}
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
      </>
    );
  }
}

export default GoogleApiWrapper(props => ({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
  language: props.language,
}))(MapContainer);
