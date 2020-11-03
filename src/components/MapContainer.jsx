import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const markers = [
  {
    name: 'Platzi CDMX',
    lat: 19.4267261,
    lng: -99.1718706,
    id: 1,
  },
  {
    name: 'Platzi Bogotá',
    lat: 4.6560716,
    lng: -74.0595918,
    id: 2,
  },
];

class MapContainer extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        show: false,
      };
    }
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { google } = this.props;
    const { show } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleShow}>
          Mapa
        </button>
        {show && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {markers.map(marker => (
              <Marker
                position={{ lat: marker.lat, lng: marker.lng }}
                key={marker.id}
              />
            ))}
          </Map>
        )}
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
