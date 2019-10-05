/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  state = { 
    // eslint-disable-next-line react/no-unused-state
    google,
    visibility: false,
  }

  toggleMap = () => {
    const {visibility} = this.state;
    let stateCurrent = false;
    if (visibility) {
      stateCurrent = false;
    } else {
      stateCurrent = true;
    }
      
    this.setState({
      visibility: stateCurrent,
    });
  }

  render() {
    const {visibility} = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleMap}>Mapa</button>
        {visibility && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            <Marker
              position={{ lat: 19.4267261, lng: -99.1718706 }}
            />
          </Map>
        )}
      </>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
