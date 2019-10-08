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
    const { google, locations } = this.props;
    const { show } = this.state;
    return(
      <Fragment>
        <button type='button' className='button' onClick={this.handleClick}>
          {show ? 'Ocultar mapa' : 'Mostrar mapa'}
        </button>
        {
          show &&
          <Map
            google={google}
            zoom={4}
            className='map'
          >
            {
              locations.map( location =>
                <Marker
                  key= {location.venuName}
                  name={location.venueName}
                  position={{ lat: location.venueLat, lng: location.venueLon }}
                />
              )
            }
          </Map>
        }
      </Fragment>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);

