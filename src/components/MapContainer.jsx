import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// const markers = [
//   {
//     name: 'Platzi CDMX',
//     lat: 19.4267261,
//     lng: -99.1718706,
//   },
//   {
//     name: 'Platzi Bogotá',
//     lat: 4.6560716,
//     lng: -74.0595918,
//   },
// ];

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      markers: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(markers => {
        this.setState({ markers, show: true });
      })
      .catch(err => console.log(err));
  }

  handleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { google } = this.props;
    const { show, markers } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleShow}>
          Toggle Map
        </button>
        {show && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {markers.map(marker => (
              <Marker
                position={{ lat: marker.venueLat, lng: marker.venueLon }}
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
