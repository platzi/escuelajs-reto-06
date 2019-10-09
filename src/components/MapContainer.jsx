import React, { Component, Fragment } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    show: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    const { google, locations } = this.props;
    const { show, activeMarker, showingInfoWindow, selectedPlace } = this.state;
    return(
      <Fragment>
        <button type='button' className='button' onClick={this.handleClick}>
          {show ? 'Ocultar mapa' : 'Mostrar mapa'}
        </button>
        { show &&
          <Map
            google={google}
            zoom={4}
            initialCenter={{ lat: 19.42672619, lng: -99.1718706 }}
            className='map'
          >
            {
              locations.map( location => (
              //  return <>
                <Marker
                key= {location.venueName}
                name={location.venueName}
                position={{ lat: location.venueLat, lng: location.venueLon }}
                onClick={this.onMarkerClick}
                />
              ))
            }
           {
              <InfoWindow
              marker={activeMarker}
              visible={showingInfoWindow}
              >
                <div>
                  <p><strong>{selectedPlace.name}</strong></p>
                </div>
              </InfoWindow>
          }
          </Map>
        }
      </Fragment>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);

