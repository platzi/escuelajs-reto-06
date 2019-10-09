import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component{
  render(){
    const {locations} = this.props;
    return (
      <Map
        google={google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
        { locations.map((location, item) => 
          <Marker key={item} position={{ lat: location.venueLat, lng: location.venueLon }} /> 
        )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);