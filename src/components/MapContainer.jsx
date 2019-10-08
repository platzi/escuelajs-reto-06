import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      show: true,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick = ( props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClicked = () => {
    const { showingInfoWindow } = this.state;
    if (showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  showMap = () => {
    const { show } = this.state;
    this.setState({
      show : !show
    })
  }
  

  render() {
    const { google, locations } = this.props;
    const { show, showingInfoWindow, activeMarker, selectedPlace}  = this.state;
    return (
      <div>
        <button type='button' onClick={this.showMap}>
          {show === true ? 'Ocultar Mapa' : 'Mostrar Mapa'}
        </button>   

        <Map 
          google={google}
          visible={show}
          onClick={this.onMapClicked}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              onClick={this.onMarkerClick}
              name={location.venueName}
              position={{lat: location.venueLat, lng: location.venueLon}}
            />
            
          ))}
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
          >
            <div>
              <h1>{selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )  
   
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);