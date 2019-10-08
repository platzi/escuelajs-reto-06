import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(){
    super();
    this.state = {
      show: true
    }
  }

  render(){
    const handleButton = () => {
      this.setState((state) => {
        return {show: !state.show}
      })
    }

    return (
      <>
        <button onClick={handleButton}>{this.state.show ? 'ocultar mapa' : 'mostrar mapa'}</button>
        
        {this.state.show && (
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