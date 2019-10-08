/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import React, { Component } from 'react';

class MapContainer extends Component {
  constructor(props){
    super (props)
    this.state = {
      showLocation: false,
      marker: {},
      place: {},
      locations: [],
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/locations')
      .then((response) => response.json())
      .then((json) => this.setState({locations: json}))
  }

  onMarkerClick(props, marker) {
    this.setState({
      place: props,
      marker,
      showLocation: true
    });
  }

  onMapClicked() {
    if (this.state.showLocation) {
      this.setState({
        showLocation: false,
        marker: null
      })
    }
  }

  render(){
    const { google } = this.props;
    return(
      <Map
        google={google}
        onClick={this.onMapClicked}
        zoom={5}
        initialCenter={{
        lat: 19.5943885,
        lng: -97.9526044
        }}
      >
        {this.state.locations.map((location, key) => (
          <Marker
            key={[key]}
            onClick={(props, marker, e) => this.onMarkerClick(props, marker, e)}
            position={{ lat: location.venueLat, lng: location.venueLon }}
            name={location.venueName}
          />
         )
         )}

        <InfoWindow
          marker={this.state.marker}
          visible={this.state.showLocation}
        >
          <div>
            <h1>{this.state.place.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBhm_SUBRJ5mOFO7NiC1D8Xfj4C8qX8P-8'
})(MapContainer);
