import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Show: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      text: "Ver mapa"
    };
  }

  handleClick = (e) => {
    if(this.state.Show){
      e.preventDefault();
      this.setState(state => ({ Show: false,
      text: "Ver mapa" }));
    }
    else{
      e.preventDefault();
      this.setState(state => ({ Show: true,
      text: "Ocultar mapa" }));
    }
    
  }

  onMarkerClick = (props, marker) =>{
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
      
    }
  };

  render() {
    const {google, markers} = this.props;
    const {Show} = this.state;
    const {text} = this.state;
    return (
      <>
        <div className='div__button'>
          <button type='button' onClick={this.handleClick}>{text}</button>  
        </div>     
        {Show && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            onClick={this.onMapClicked}
          >
            <Marker
              name='Platzi HQ CDMX'
              position={{ lat: 19.4267261, lng: -99.1718706 }}
              onClick={this.onMarkerClick}
            />
            <Marker
              name='Platzi HQ Bogota'
              position={{lat: 4.6560716, lng: -74.0595918}}
              onClick={this.onMarkerClick} 
            />    
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h2>Estás en:</h2>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
          </Map>          
        )}
      </>
    );
  }
}

export default GoogleApiWrapper({apiKey:'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'})(MapContainer);