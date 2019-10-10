import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      show: !state.show
    }));
  }

  render() {
    return (
      <>
        <button className="button" onClick={this.handleClick}>
          {this.state.show ? 'Ocultar' : 'Mostrar'}
        </button>
        <Map
          google={google}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={this.state.show}
        >
          <Marker
            title={'Platzi Mexico'}
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
          <Marker
            title={'Platzi Bogota'}
            position={{ lat: 4.6560716, lng: -74.0595918 }}
          />
        </Map>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);