import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// const MapContainer = ({ google }) => {
//   return (
//     <Map
//       google={google}
//       zoom={5}
//       initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
//     >
//       <Marker
//         position={{ lat: 19.4267261, lng: -99.1718706 }}
//       />
//     </Map>
//   );
// }

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      google: this.props.google,
    };

    this.showMap = this.showMap.bind(this);
  }

  showMap() {
    this.setState(state => ({
      show: !state.show,
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.showMap}>Mostrar/Ocultar</button>

        {this.state.show && (
          <Map
            google={this.state.google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {this.props.data.map(pais => (
              <Marker
                key={pais.venueName}
                position={{ lat: pais.venueLat, lng: pais.venueLon }}
              />
            ))}
          </Map>
        )}
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
