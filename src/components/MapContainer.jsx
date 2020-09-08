import React from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  state = {
    visible: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markers: [],
  };

  showMap = props => {
    if (!this.visible) {
      this.setState({
        visible: !this.state.visible,
      });
    }
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

  componentDidMount() {
    fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(markers => {
        console.log(markers);
        this.setState({ markers, show: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    const style = {
      width: '900px',
      height: '500px',
    };
    return (
      <>
        <button type="button" onClick={this.showMap}>
          {this.state.visible ? 'Hide Map' : 'Show Map'}
        </button>
        <div className="map">
          <Map
            style={style}
            google={google}
            zoom={4}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            visible={this.state.visible}
          >
            {this.state.markers.map(marker => (
              <Marker
                name={marker.venueName}
                onClick={this.onMarkerClick}
                position={{ lat: marker.venueLat, lng: marker.venueLon }}
              />
            ))}
            <Marker
              name={'México :)'}
              onClick={this.onMarkerClick}
              position={{ lat: 22.4267261, lng: -99.1718706 }}
            />
            <Marker
              name={'Colombia :D '}
              onClick={this.onMarkerClick}
              position={{ lat: 6.6560716, lng: -74.0595918 }}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
                <h3> Hola! </h3>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
