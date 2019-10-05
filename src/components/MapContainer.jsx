import React, { Component, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  state = { show: true };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Show!!!!</button>
        {this.state.show ? (
          <Map
            google={this.props.google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            <Marker position={{ lat: 19.4267261, lng: -99.1718706 }} />
            <Marker position={{ lat: 4.6560716, lng: -74.0595918 }} />
          </Map>
        ) : (
          <h1>Para mostrar el mapa necesitas presionarl el boton ☝🏼</h1>
        )}
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
