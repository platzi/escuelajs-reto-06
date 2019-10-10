import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

 // eslint-disable-next-line react/prefer-stateless-function
 class MapContainer extends React.Component{
  
  render(){
    return (
      <Map
        // eslint-disable-next-line react/destructuring-assignment
        google={this.props.google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
        <Marker
          name="Platzi Mexico"
          position={{ lat: 19.4267261, lng: -99.1718706 }}
        />
        <Marker
          name="Platzi Bogota"
    // eslint-disable-next-line react/jsx-indent-props
    position={{lat:  4.6560716, lng: -74.0595918}} />
   
 
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);