/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { InfoWindow, Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { getLocations } from '../utils/requests'

class MapContainer extends Component  {

  state = {
    showMap: true,
    locations: [],
    error: null,
    showingInfoWindow: false,
    activeMarker: '',
    selectedPlace: { name: '' }
  }

  componentDidMount () {
    getLocations()
    .then(locations => this.setState({ locations }))
    .catch(error => console.log(error))
  }

  toggleMap = () => {
    const { showMap } = this.state
    this.setState({ showMap: !showMap })
  }

  markerClickHandler = (selectedPlace, activeMarker) => this.setState({ selectedPlace, activeMarker, showingInfoWindow: true })

  mapClickHandler = () => {
    const {showingInfoWindow} = this.state

    if (showingInfoWindow) {
      this.setState({ showingInfoWindow: false, activeMarker: null })
    }
  };

  render () {
    const { google } = this.props
    const { showMap, error, locations, selectedPlace, activeMarker, showingInfoWindow } = this.state

    if (error) {
      return <p>There was an error fetching the data, please refresh the browser...</p>
    }

    return (
      <div>
        <button
          type='button'
          onClick={this.toggleMap}
        >
          Toggle Map
        </button>
        {showMap && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            onClick={this.mapClickHandler}
          >
            {locations.map(({venueLat, venueLon, venueName}) => {
              return (
                <Marker
                  position={{ lat: venueLat, lng: venueLon }}
                  key={venueName}
                  name={venueName}
                  onClick={this.markerClickHandler}
                />
              )
            })}
            <InfoWindow
              marker={activeMarker}
              visible={showingInfoWindow}
            >
              <div>
                <h1>{selectedPlace && selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        )}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);