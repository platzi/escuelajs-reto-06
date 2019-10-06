/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      placeName: '',
    };
    this.handleToggleOpen = this.handleToggleOpen.bind(this);
  }

  componentDidMount() {
    window
      .fetch('http://localhost:3000/locations')
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ places: resp });
      });
  }

  handleToggleOpen = name => {
    this.setState({
      placeName: name,
    });
  };

  render() {
    const { google } = this.props;
    return (
      <Map
        google={google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
        {this.state.places.map(place => (
          <Marker
            key={place.venueName}
            name={place.venueName}
            position={{ lat: place.venueLat, lng: place.venueLon }}
            onClick={() => this.handleToggleOpen(place.venueName)}
          >
            {true && (
              <InfoWindow
                onCloseClick={() => this.handleToggleOpen(place.venueName)}
              >
                <h1>{this.state.placeName}</h1>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
