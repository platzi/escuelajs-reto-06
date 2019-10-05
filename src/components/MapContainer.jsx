import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// eslint-disable-next-line react/prefer-stateless-function
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLocation: [],
      show: false,
    }
  }

  // eslint-disable-next-line react/sort-comp
  handleOpenMap = () => {
    this.setState({ show: true });
  };

  handleCloseMap = () => {
    this.setState({ show: false });
  };

  handleFormSubmit = () => {
    const url = `http://localhost:3000/locations`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          dataLocation: json
        });
      });
  }

  componentDidMount() {
    this.handleFormSubmit();
  }

  render() {
    const { google } = this.props;

    const points = [
      { lat: 19.5943885, lng: -97.9526044 },
      { lat: 4.6560716, lng: -74.0595918 },
    ];

    const bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    return (
      <div>
        <button type="button" onClick={this.handleOpenMap}>Mostrar</button>
        <button type="button" onClick={this.handleCloseMap}>Ocultar</button>
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={this.state.show}
          bounds={bounds}
        >
          {this.state.dataLocation.map((store, index) => {
            return (
              <Marker 
                key={index}
                id={index}
                name={store.venueName} 
                position={{ lat: store.venueLat, lng: store.venueLon }} 
              />
            )
          })}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);