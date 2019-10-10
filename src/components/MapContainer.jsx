import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends React.Component {
  state = {
    show: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  handleClick = () => {
    this.setState(state => ({
      show: !state.show,
    }));
  };

  onMarkerClick = (props, marker) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true,
});

  render() {
    return (
      <Map
        google={google}
        zoom={5}
        initialCenter={{ lat: 11.1402111, lng: -84.9797006 }}>
        <Marker
          name={'Platzi Mexico'}
          position={{ lat: 19.4267261, lng: -99.1718706 }}
        />
        <Marker
          name={'Platzi Bogota'}
          position={{ lat: 4.6560716, lng: -74.0595918 }} />
      </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);

