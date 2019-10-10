import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      showMap: !state.showMap
    }));
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });


  render() {
    return (
      <>
        <button className="button" onClick={this.handleClick}>
          {this.state.showMap ? 'Ocultar' : 'Mostrar'}
        </button>
        <Map
          google={google}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={this.state.showMap}
        >
          {this.props.data.map((data, key) => (
            <Marker
              key={key}
              name={data.venueName}
              onClick={this.onMarkerClick}
              position={{ lat: data.venueLat, lng: data.venueLon }}
            />
          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);