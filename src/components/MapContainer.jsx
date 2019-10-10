import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import useInitialState from '../hooks/useInitialState.js';

class MapContainer extends React.Component
{

  
  state = 
  {
    show: false,
    latitude: 19.5943885,
    longitude: -97.9526044,
    locations: useInitialState('http://localhost:3000/locations')                              
  }

  showMap = () =>
  {
    this.setState({
      show: this.state.show = true
    })
  }

  mapCoordinates = () =>
  {
    this.setState({

    })
  }
  
  render()
  {
    const { google } = this.props;
    return (
      <div>
        { this.state.show && 

        <Map
          google={google}
          zoom={7}
          initialCenter={{ lat: 19.4267261, lng: -99.1718706 }}
        >
          <Marker
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
          <Marker
            position={{ lat:  4.6560716, lng: -74.0595918 }}
          />

      
        </Map>
        }
        <button onClick={this.showMap} >showMap</button>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);