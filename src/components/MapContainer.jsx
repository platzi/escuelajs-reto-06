import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import ButtonShow from './ButtonShow';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.google = props.google;
    this.state = { 
      show: false,
      showInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    this.handleShowChange = this.handleShowChange.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(propsMarker, marker) {
    this.setState({
      selectedPlace: propsMarker,
      activeMarker: marker,
      showInfoWindow: true,
    });
  }
  
  handleShowChange(value) {
    this.setState({ show: value });
  }

  render() {
    const { show, activeMarker,showInfoWindow, selectedPlace } = this.state;
    return (
      <>
        <ButtonShow show={show} onShowChange={this.handleShowChange} />
        {show && (
          <Map
            google={this.google}
            zoom={4}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {this.props.locations.map(item => {
              return (
                <Marker
                  key={item.venueName}
                  title={item.venueName}
                  name={item.venueName}
                  position={{ lat: item.venueLat, lng: item.venueLon }}
                  onClick={this.onMarkerClick}
                />
              );
            })}
            <InfoWindow marker={activeMarker} visible={showInfoWindow}>
              <div><h3>{selectedPlace.name}</h3></div>
            </InfoWindow>
          </Map>
        )}
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
