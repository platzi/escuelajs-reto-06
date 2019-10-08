import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props){
    super(props);
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
          google={this.props.google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          <Marker
            title="Platzi HQ México"
            name="Platzi HQ México"
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
          <Marker
            title="Platzi HQ Bogotá"
            name="Platzi HQ Bogotá"
            position={{ lat: 4.6560716, lng: -74.0595918 }}
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