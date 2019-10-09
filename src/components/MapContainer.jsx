import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true,
    };
  } 

  handleShowMap = () => {
    const { show } = this.state;
    if(show){
      this.setState({
        show: false,
      })
    }else{
      this.setState({
        show: true,
      })
    }     
  }

  render(){
    const {google} = this.props;
    const {show} = this.state;
    return (
      <>
        <button type="button" onClick={this.handleShowMap}>
          mostrar/ocultar mapa
        </button>
        <Map
          visible={show} 
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        >
          <Marker
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
        </Map>
      </>
    );
  }
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);