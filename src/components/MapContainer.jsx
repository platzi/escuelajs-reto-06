import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
      show: true,
  }
  handleClick = () => {
      this.setState({
          show: !this.state.show,
      })
  }

  render() {
    const {show} = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
            Mostrar Mapa
        </button>
        
        <Map 
          google={this.props.google} 
          zoom={5}
          visible={show}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          
          <Marker
            name={'Platzi Bogota'}
            position={{lat: 4.6560716, lng: -74.0595918}} />

          <Marker
            name={'Platzi México'}
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />

        </Map>
        
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);