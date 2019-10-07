/* eslint-disable react/no-unused-state */
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
    const {locations} = this.props;

    return (
      <>
        <button type="button" onClick={this.toggleMap}>Mapa</button>
        {visibility && (
          <Map
            google={google}
            zoom={4}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          > 
            {locations.map((marker) => <Marker key={marker.venueName} position={{ lat: marker.venueLat, lng: marker.venueLon }} />)}
          </Map>
        )}
      </>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
