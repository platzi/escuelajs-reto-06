import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      show: true,
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      markers: {
        isLoading: false,
        hasError: false,
        items: []
      }
    }

    this.handleToggleMapVisibility = this.handleToggleMapVisibility.bind(this)
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
  }

  componentDidMount() {
    const markers = this.state
    this.setState({
      markers: {
        ...markers,
        isLoading: true
      }
    })

    fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(res => {
        this.setState({
          markers: {
            ...markers,
            isLoading: false,
            items: res
          }
        })
      })
      .catch(() => {
        this.setState({
          markers: {
            ...markers,
            isLoading: false,
            hasError: true
          }
        })
      })
  }

  handleToggleMapVisibility() {
    const { show } = this.state
    this.setState({show: !show})
  }

  handleMarkerClick(props, marker){
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }


  render() {
    const { google } = this.props
    const { show, markers, showingInfoWindow, activeMarker, selectedPlace } = this.state
    return (
      <div>
        <button type="button" className="btn" onClick={this.handleToggleMapVisibility}>{ show ? 'Ocultar' : 'Mostrar' }</button>
        {markers.isLoading && <h3>Loading...</h3>}
        { !markers.isLoading && !markers.hasError && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            className={show ? 'MapContainer' : 'MapContainer is-hidden'}
          >
            {markers
              && markers.items
              && markers.items.length > 0
              && markers.items.map(marker => (
                <Marker
                  key={marker.venueName}
                  position={{ lat: marker.venueLat, lng: marker.venueLon }}
                  onClick={this.handleMarkerClick}
                  name={marker.venueName}
                />
            ))}
            <InfoWindow
              visible={showingInfoWindow}
              marker={activeMarker}
            >
              <div>
                <h1>{selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);