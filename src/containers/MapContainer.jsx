import React, { Component }  from 'react'
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  };

  onMarkerClick = (props, marker) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });


  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }

  };

    render(){
    return (
      <Map
        google={google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        onClick={this.state.onMapClicked}
      
      >

        {this.props.locations.map( location => {
      return(
        <Marker  
          onClick={this.onMarkerClick}
          key={location.venueName}
          name={location.venueName}
          position={{ lat: location.venueLat, lng: location.venueLong}}
        />
      )
    })
    }                  
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);

