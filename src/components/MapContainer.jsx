import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker ,InfoWindow } from 'google-maps-react';

const places = {
  'bogota': {
    'marker': {
      lat: 4.6560716,
      lng: -74.0595918,
    },
    'viewport': {
      lat: 4.6943885,
      lng: -74.0
    }
  },
  'mexico': {
    'marker': {
      lat: 19.4267261,
      lng: -99.1718706,
    },
    'viewport': {
      lat: 19.5943885,
      lng: -97.9526044
    }
  },
}

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      show: false, 
      textButton: 'Show the Map',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  
  handleMap(){
    if(this.state.show===false){
      this.setState({
          show: true,
          textButton:'Hide the Map' 
      });
    }else{
      this.setState({
        show: false,
        textButton:'Show the Map'
    });
    }
  }

  render() {
    const {google} = this.props;

    return (
      <div>
        <button type='button' onClick={()=>this.handleMap()}>{this.state.textButton}</button>
        {
          this.state.show?
            <Map
                google={google}
                onClick={this.onMapClicked}
                zoom={5}
                initialCenter={places.mexico.viewport}
            >
              <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
              </InfoWindow>

              <Marker
                position={places.mexico.marker}
                />
              <Marker
                position={places.bogota.marker}
                />
            
            </Map>
          : null
        }
 

      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
