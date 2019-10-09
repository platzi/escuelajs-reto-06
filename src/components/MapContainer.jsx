import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const API = 'http://localhost:3000/locations';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      btnTxt: 'Mostrar Mapa',
      locations: [],
    };
  }

  componentDidMount() {
    window.fetch(API)
      .then(response => response.json())
      .then(locations => this.setState({ locations }))
      // eslint-disable-next-line no-console
      .catch(error => console.log(`Hubo un error al consultar la API: ${error}`));
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
    const { show, btnTxt, locations } = this.state;
    const { google } = this.props;

    return (
      <>
        <button type='button' onClick={this.handleShowMap}>{btnTxt}</button>

        {show ? (
          <Map google={google} zoom={5} initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}>
            {
              locations.length > 0 &&
              locations.map(location => (
                <Marker
                  key={location.venueName}
                  title={location.venueName}
                  position={{ lat: location.venueLat, lng: location.venueLon }}
                />
              ))
            }
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