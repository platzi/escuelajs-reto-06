import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  toogleButton = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const {show} = this.state;
    return(
      <div>
        <button type="button" onClick={this.toogleButton}>{show ? 'Ocultar mapa' : 'Ver mapa' }</button>
        {show &&
          <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 11.8901835, lng: -84.0547899 }}
          >
            <Marker
            name={'Platzi HQ México'}
            position={{ lat: 19.4267261, lng: -99.1718706 }}
            />
            <Marker
            name={'Platzi HQ Bogotá'}
            position={{ lat: 4.6560716, lng: -74.0595918 }}
            />
          </Map>
        }
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);