import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      btnTxt: 'Mostrar Mapa',
    };
  }

  handleShowMap = () => {
    const { show } = this.state;
    if (show === false) {
      this.setState({
        show: true,
        btnTxt: 'Ocultar Mapa',
      });
    } else {
      this.setState({
        show: false,
        btnTxt: 'Mostrar Mapa',
      });
    }
  }

  render() {
    const { show, btnTxt } = this.state;
    const { google } = this.props;

    return (
      <>
        <button type='button' onClick={this.handleShowMap}>{btnTxt}</button>

        {show ? (
          <Map google={google} zoom={5} initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}>
            <Marker
              title='Platzi HQ México'
              position={{ lat: 19.4267261, lng: -99.1718706 }}
            />
            <Marker
              title='Platzi HQ Bogotá'
              position={{ lat: 4.6560716, lng: -74.0595918 }}
            />
          </Map>
        ) :
          (
            <h1>No hay Mapa</h1>
          )}
      </>
    )
  }
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);