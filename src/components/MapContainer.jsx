import React, {Component} from 'react';
import MapButton from '../components/MapButton';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    show : false
  }
  toggleMap = () => {
    const stateMap = this.state.show ? false : true
    this.setState({show: stateMap})
  }
  render () {
    return (
      <div>
        <Map
          google={this.props.google}
          style={{width: '100%', height: '400px', position: 'relative'}}
          className={'map'}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={this.state.show}
        >
          <Marker
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
          <Marker
            position={{ lat: 4.6560716, lng: -74.0595918 }}
          />
        </Map>
        <MapButton toggleMap={this.toggleMap} isMapVisible={this.state.show} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);