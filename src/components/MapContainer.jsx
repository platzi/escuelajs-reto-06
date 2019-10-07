import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      zoom: 5,
      lat: 19.5943885,
      lng: -97.9526044,
      show: false
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() { 
    if(this.state.show){
      this.setState({
        show: false
      });
    }
    else{ 
      this.setState({
        show: true  
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <button 
            className='Button' 
            type='button' 
            onClick={this.toggleShow}
          > 
                  Mostrar Mapa 
          </button>
        </div>
        <div>
          <Map
            google={google}
            zoom={this.state.zoom}
            visible={this.state.show}
            initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
          >
            <Marker
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
          </Map>
        </div>
      </div>


    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);