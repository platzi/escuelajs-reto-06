import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/containers/MapContaoner.styl';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = () => {
      this.setState = {
        show: true,
      };
    };
  }

  render() {
    const { google, locations } = this.props;
    const { show } = this.state;
    return (
      <div className="MapContainer">
        <Map 
          classNAme="Map"
          google={google}
          zoom={17}
          initialCenter={{ lat: 4.7141943, lng: -74.1196735 }}
        >
          <Marker position={{ lat: 4.714466, lng: -74.118470 }} />
        </Map>
      </div> 
    );
  }
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
