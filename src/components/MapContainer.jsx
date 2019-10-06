import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toShow: true,
    };
  }

  onClick = (event) => {
    event.preventDefault();
    this.setState( (state) => ({ toShow: !state.toShow }));
  }

  render() {
    const {google, markers} = this.props;
    const {toShow} = this.state;
    return (
      <>
        <div role="button" className='div_button_show' onClick={this.onClick} title="Mostrar el Mapa" aria-label="Mostrar el Mapa" aria-pressed="false">
          Mostrar 
        </div>     
        {toShow && (
          <Map
            google={google}
            zoom={4}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            { markers.map((location, item) => <Marker key={item} position={{ lat: location.venueLat, lng: location.venueLon }} /> )}            
            <div className='div_button_show' onClick={this.onClick} title="Ocultar el Mapa" aria-label="Ocultar el Mapa" aria-pressed="false">
              Ocultar
            </div> 
          </Map>
          
        )}
        
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);