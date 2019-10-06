import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      google: this.props.google,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    this.showMap = this.showMap.bind(this);
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  showMap() {
    this.setState(state => ({
      show: !state.show,
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.showMap}>Mostrar/Ocultar</button>

        {this.state.show && (
          <Map
            google={this.state.google}
            zoom={5}
            
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {this.props.data.map(pais => (
              <Marker
                key={pais.venueName}
                onClick={this.onMarkerClick}
                position={{ lat: pais.venueLat, lng: pais.venueLon }}
                name={pais.venueName}
              />

              
            ))}
            
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>

          </Map>
        )}
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
