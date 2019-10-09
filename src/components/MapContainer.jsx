import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  toogleButton = () => {
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
    const {locations} = this.props;
    const {show} = this.state;
    return(
      <div>
        <button type="button" onClick={this.toogleButton}>{show ? 'Ocultar mapa' : 'Ver mapa' }</button>
        {show &&
          <Map
          google={this.props.google}
          zoom={5}
          initialCenter={{ lat: 11.8901835, lng: -84.0547899 }}
          onClick={this.onMapClicked}
          >
            {locations.map(item => 
              <Marker
              onClick={this.onMarkerClick}
              name={item.venueName}
              position={{ lat: item.venueLat, lng: item.venueLon }}
              />
            )}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        }
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);