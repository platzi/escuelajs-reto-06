import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// eslint-disable-next-line react/prefer-stateless-function
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleMapVisibility = () => {
    const { show } = this.state;
    if (show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleMapVisibility}>
          Mostrar Mapa
        </button>
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={show}
        >
          <Marker position={{ lat: 19.4267261, lng: -99.1718706 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
