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
          >
            {locations.map(item => 
              <Marker
              name={item.venueName}
              position={{ lat: item.venueLat, lng: item.venueLon }}
              />
            )}
          </Map>
        }
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);