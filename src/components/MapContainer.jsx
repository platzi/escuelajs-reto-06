import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends React.Component {
  state = {
    visibleMap: true,
    activeMarker: {},
    selectedPlace: {},
    showInfoWindow: false,
  };

  handleClick = () => {
    this.setState({
      visibleMap: !this.state.visibleMap,
    });
  };

  onMarkerClick = (props, marker, e) => {
    console.log(marker);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true,
    });
  };

  render() {
    const { google, markers } = this.props;
    const {
      visibleMap,
      showInfoWindow,
      activeMarker,
      selectedPlace,
    } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Toggle Map Visibility
        </button>

        <Map
          key="2"
          visible={this.state.visibleMap}
          // centerAroundCurrentLocation = {true}
          google={google}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          {markers.length > 0 &&
            markers.map(marker => (
              <Marker
                key={marker.venueName}
                onClick={this.onMarkerClick}
                position={{ lat: marker.venueLat, lng: marker.venueLon }}
                venueName={marker.venueName}
              />
            ))}
          {markers.length > 0 && (
            <InfoWindow marker={activeMarker} visible={showInfoWindow}>
              <div className="InfoWindow"> 
                <p>{`${selectedPlace.venueName}`}</p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
