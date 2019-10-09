import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true,
    };
  } 

  handleShowMap = () => {
    const { show } = this.state;
    if(show){
      this.setState({
        show: false,
      })
    }else{
      this.setState({
        show: true,
      })
    }     
  }

  render(){
    const {google} = this.props;
    const {show} = this.state;

    const points = [
      { lat: 4.6560716, lng: -74.0595918 },
    ]

    const bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    return (
      <>
        <button type="button" onClick={this.handleShowMap}>
          mostrar/ocultar mapa
        </button>
        <Map
          visible={show} 
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          bounds={bounds}
        >
          <Marker
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
          <Marker
            title={'Platzi HQ Bogotá'}
            name={'Platzi Bogota'}
            position={{lat: 4.6560716, lng: -74.0595918}} 
          />
        </Map>
      </>
    );
  }
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);