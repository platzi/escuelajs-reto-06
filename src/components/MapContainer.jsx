import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const places = {
  'bogota': {
    'marker': {
      lat: 4.6560716,
      lng: -74.0595918,
    },
    'viewport': {
      lat: 4.6943885,
      lng: -74.0
    }
  },
  'mexico': {
    'maker': {
      lat: 19.4267261,
      lng: -99.1718706,
    },
    'viewport': {
      lat: 19.5943885,
      lng: -97.9526044
    }
  },
}

class MapContainer extends Component {

  constructor() {
    super();
    this.state = { show: false }
    
  }
  
  hidder(){
    if(this.state.show===false){
      this.setState({
          show: true
      });
    }else{
      this.setState({
        show: false
    });
    }
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.hidder()}>show Map</button>
        {
          this.state.show?
            <Map
          google={this.props.google}
          zoom={5}
          initialCenter={places.mexico.viewport}
          >

          <Marker
            position={places.mexico.maker}
            />
        </Map>
        : null
        }
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
