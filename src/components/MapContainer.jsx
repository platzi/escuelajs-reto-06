import React, { Component, Fragment } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    show: false,
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const { show } = this.state;
    return(
      <Fragment>
        <button type='button' onClick={this.handleClick}>
          {show ? 'Ocultar mapa' : 'Mostrar mapa'}
        </button>
        {
          show &&
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            className='map'
          >
            <Marker
              position={{ lat: 19.4267261, lng: -99.1718706 }}
            />
          </Map>
        }
      </Fragment>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);

