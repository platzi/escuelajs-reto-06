/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const { google } = this.props;
    return (
      <Map
        google={google}
        zoom={5}
        initialCenter={{ lat: 9.5943885, lng: -87.9526044 }}
      >
        <Marker position={{ lat: 19.4267261, lng: -99.1718706 }} />
        <Marker position={{ lat: 4.6560716, lng: -74.0595918 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
