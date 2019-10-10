import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      show: !state.show
    }));
  }

  render() {
    return (
      <>
        <button className="button" onClick={this.handleClick}>
          {this.state.show ? 'Ocultar' : 'Mostrar'}
        </button>
        <Map
          google={google}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={this.state.show}
        >
          {this.props.data.map( (data, key) => ( 
            <Marker
              key={key}
              title={data.venueName}
              position={{ lat: data.venueLat, lng: data.venueLon }}
            />
          ))}
          
        </Map>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);