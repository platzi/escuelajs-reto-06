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
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            <Marker
            position={{ lat: 19.4267261, lng: -99.1718706 }}
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