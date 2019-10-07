import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/components/MapContainer.styl'

class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: true,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }


  toggleMap = () => {
    this.setState({
      show: !this.state.show
    })
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

  render() {
    const mapStyle = {
      width: '100%',
      height: '500px',
      position: 'relative',
    }
    const { locations } = this.props
    return (
      <div className="mapContainer">
        <Map
          google={google}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          className={ this.state.show ? 'mapContainer__map': 'mapContainer__map hidde'}
          style={mapStyle}
        >
          {
            locations.map((location, index) => {
              return (
                  <Marker
                    position={{ lat: location.venueLat, lng:location.venueLon }}
                    onClick={this.onMarkerClick}
                    name={location.venueName}
                    key={index}
                  />
              )
            })
          }
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
        <button onClick={this.toggleMap.bind(this)}>{ this.state.show ? 'Hidde': 'Show'}</button>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);