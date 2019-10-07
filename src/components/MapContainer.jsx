import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = { mapVisible : false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      mapVisible: !state.mapVisible
    }));
  }

  render(){
    return(
      <div className="">
        <button className="button" onClick={this.handleClick}>
          {this.state.mapVisible ? 'Ocultar' : 'Mostrar'}
        </button>
        <Map
          google={google}
          zoom={5}
          visible={this.state.mapVisible}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          <Marker
            title={'Platzi México'}
            name={'Platzi México'}
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
          <Marker
            title={'Platzi Bogota'}
            name={'Platzi Bogota'}
            position={{ lat: 4.6560716, lng: -74.0595918 }}
          />
        </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);