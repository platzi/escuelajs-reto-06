import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props){
      super(props);
      this.state = {
          show: true,
          activeMarker: {},
          selectedPlace: {},
          showInfoWindow: false,
      }
  }
  
  handleClick = () => {
      this.setState({
          show: !this.state.show,
      })
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true
    });
  }

  render() {
    const { google, locations } = this.props;
    const { show, showInfoWindow, activeMarker, selectedPlace} = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleClick}>
            Mostrar Mapa
        </button>
        
        <Map 
          google={google} 
          zoom={5}
          visible={show}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >

          {locations.map((item, index) =>
            <Marker
              key={index}
              onClick={this.onMarkerClick}
              title={item.venueName}
              name={item.venueName}
              venueName={item.venueName}
              position={{lat: item.venueLat, lng: item.venueLon}} 
            />
          )}
          {
            locations.length>0 &&
            <InfoWindow
              marker={activeMarker}
              visible={showInfoWindow}
            >
              <div className='InfoWindow'>
                <p>{selectedPlace.venueName}</p>
              </div>
            </InfoWindow>
          }

        </Map>
        
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);