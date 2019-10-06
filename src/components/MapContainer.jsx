import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import InformationContainer from './InformationContainer';
import '../styles/containers/App.styl';

/**
 * Main component that render Map.
 *
 */
class MapContainer extends React.Component {
  state = {
    showInfo: false,
    activeMarker: {},
    locationSelected: {},
  };

/**
 * Handle the state InfoWindow
 * 
 * @param {props} first Data of location
 * @param {marker} second Marker that was clicked
 */
  onMarkerClick = (props, marker, e) => {
    this.setState({
        locationSelected: props,
        activeMarker: marker,
        showInfo: true
      }
    );
  };

  render() {
    const {activeMarker, showInfo, locationSelected}=this.state;
    const {google,show, locations} = this.props;
    
    const markers = locations.map((location) => {
      return <Marker onClick={this.onMarkerClick} key={location.id} name={location.venueName} position={{ lat: location.venueLat, lng: location.venueLon}} />
    });
  
    return (
      <Map
        google={google} 
        zoom={4}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        visible={show}
      >
        {markers}
        <InfoWindow
          marker={activeMarker}
          visible={showInfo}
        >
          <InformationContainer 
            name={locationSelected.name} 
          />
        </InfoWindow>
      </Map>
    );
  };
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
