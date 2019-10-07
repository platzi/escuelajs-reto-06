import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import InfoView from './infoView';
class MapContainer extends React.Component {
  state = {
    showInfo: false,
    punteros: {},
    geoSelect: {},
  };

  onClick = (props, marker) => {
    this.setState({
      geoSelect: props,
      punteros: marker,
      showInfo: true,
    });
  };

  render() {
    const puntero = this.props.coordenada.map(coordenada => {
      return (
        <Marker
          onClick={this.onClick}
          key={coordenada.id}
          name={coordenada.venueName}
          position={{ lat: coordenada.venueLat, lng: coordenada.venueLon }}
        />
      );
    });
    return (
      <Map
        google={this.props.google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        visible={this.props.show}
      >
        {puntero}
        <InfoWindow marker={this.state.punteros} visible={this.state.showInfo}>
          <InfoView name={this.state.geoSelect.name} />
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
