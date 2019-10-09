import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// eslint-disable-next-line react/prefer-stateless-function
class MapContainer extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      show: false,
      markers: data,
    };
  }

  handleMapVisibility = () => {
    const { show } = this.state;
    if (show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    const { show, markers } = this.state;
    const { google } = this.props;
    return (
      <div>
        <button type="button" onClick={this.handleMapVisibility}>
          Mostrar Mapa
        </button>
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={show}
        >
          {markers.map(item => (
            <Marker
              key={item.venueName}
              name={item.venueName}
              position={{ lat: item.venueLat, lng: item.venueLon }}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
