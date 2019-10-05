import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(state => ({ isShow: !state.isShow }));
  }

  onMarkerClick = (props, marker, e) =>{
    console.log('hola')
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
    const {isShow} = this.state;
    return (
      <>
        <div className='div__button'>
          <button type='button' onClick={this.handleClick}>Mostrar</button>  
        </div>     
        {isShow && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            onClick={this.onMapClicked}
          >
            {markers.map((item, i) => <Marker key={i} name={item.venueName} position={{ lat: item.venueLat, lng: item.venueLon }} onClick={this.onMarkerClick} /> )}            

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
          </Map>          
        )}

        
        
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);