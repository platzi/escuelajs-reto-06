import React from 'react';
import { Map,  GoogleApiWrapper, InfoWindow , Marker  } from 'google-maps-react';

class  MapContainer extends React.Component  {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  
  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    const { google, locations } = this.props
    const { selectedPlace, activeMarker, showingInfoWindow } = this.state

    return (
      <Map
        google={google}
        zoom={4}
        initialCenter={{lat: locations[0].venueLat, lng: locations[0].venueLon }}
      >
        { 
          locations.map( (sitio) => 
            ( 
              <Marker 
                onClick={this.onMarkerClick}
                key={sitio.id}
                name={sitio.venueName}
                position={{lat: sitio.venueLat, lng: sitio.venueLon }}
              />
            )
          )        
        }

        <InfoWindow 
          marker={activeMarker}
          visible={showingInfoWindow}
        >
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
  language: 'spanish',
})(MapContainer);