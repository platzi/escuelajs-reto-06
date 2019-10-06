import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/containers/App.styl';

// eslint-disable-next-line react/prefer-stateless-function
class MapContainer extends React.Component {
  render() {
    const {google,show} = this.props;
    return (
      <Map
        // eslint-disable-next-line react/destructuring-assignment
        google={google} 
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        visible={show}
      >
        <Marker
          position={{ lat: 19.4267261, lng: -99.1718706 }}
        />
      </Map>
    );
  };
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
