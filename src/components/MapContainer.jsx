import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const API = 'http://localhost:3000/locations';

class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      markers: {
        error: {},
        result: {}
      }
    }
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleToggleMapVisibility = this.handleToggleMapVisibility.bind(this);
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(res => {
        this.setState({
          markers: {
            error: '',
            result: res
          }
        })
      })
      .catch((error) => {
          this.setState({
            markers: {
              error: `Se ha producido un error ${error}`,
              result: ''
            }
        })
      })
  }

  handleMarkerClick(props, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  handleToggleMapVisibility() {
    const { show } = this.state
    this.setState({show: !show})
  }

  render() {
    const { google } = this.props
    const { show, showingInfoWindow, activeMarker, selectedPlace, markers } = this.state
    return (
      <section>
        <button type="button" className="btn" onClick={this.handleToggleMapVisibility}>
          { show ? 'Hide' : 'Show' }
        </button>
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 12.5943885, lng: -85.9526044 }}
          className={show ? 'mapContainer' : 'mapContainer is-hidden'}
          name='Current location'
        >

          {markers.result.length > 0 && markers.result.map(marker => (
            <Marker
              key={marker.venueName}
              position={{ lat: marker.venueLat, lng: marker.venueLon }}
              name={marker.venueName}
              onClick={this.handleMarkerClick}
            />
          ))}
          
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
          >
            <div>
              <h3>{selectedPlace.name}</h3>
            </div>
          </InfoWindow>
          
        </Map>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);