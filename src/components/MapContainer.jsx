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
    const {locations} = this.props;

    return (
      
      <>
        <button type="button" onClick={this.handleShowMap}>
          mostrar/ocultar mapa
        </button>
        <Map
          visible={show} 
          google={google}
          zoom={5}
          initialCenter={{ lat: locations[1].venueLat, lng: locations[1].venueLon }}
        >
          {
            locations.map(
              (loc) => 
                <Marker position={{ lat: loc.venueLat, lng: loc.venueLon }} />
            )
          }
        </Map>
      </>
    );
  }
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);