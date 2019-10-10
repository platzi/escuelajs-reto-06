import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

// Archivos
import { locations } from '../../locations.json';




class MapContainer extends Component {
  state = {
    viewInfo: false,
    marker: {},
    place: {},
  };


  onMarkerClick = (props, marker) => {
    this.setState({
      place: props,
      marker,
      viewInfo: true
    });
  };

  onMapClicked = () => {
    if (this.state.viewInfo) {
      this.setState({
        viewInfo: false,
        marker: null
      })
    }
  };


  render() {
    // Permite pintar el Marker dependiendo del numero de objetos en el archivo locations.json
    const markers = Object.keys(locations).map(key => (
      <Marker
        key={key}
        name={locations[key].venueName}
        position={{ lat: locations[key].venueLat, lng: locations[key].venueLon }}
        onClick={this.onMarkerClick}
      />
    )
    );


    return (
      <Map
        google={this.props.google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        onClick={this.onMapClicked}
      >

        { markers }

        <InfoWindow
          marker={this.state.marker}
          visible={this.state.viewInfo}
        >
          <div>
            <h1>{this.state.place.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
