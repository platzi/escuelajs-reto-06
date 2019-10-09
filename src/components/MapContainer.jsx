import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';



class MapContainer extends Component {
  constructor(props){
    const { item, loaded, google } = props;
    super(props);
    this.state = {
      zoom: 5,
      lat: 19.5943885,
      lng: -97.9526044,
      show: false,
      markers: item,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
;
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

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
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
            {this.state.markers.length > 0 &&
              this.state.markers.map( item => (
                <Marker
                  onClick={this.onMarkerClick}
                  key={item.venueName}
                  title={item.venueName}
                  position={{ lat: item.venueLat, lng: item.venueLon }}
                  name={item.venueName}
                />
              ))
          }
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
            </InfoWindow>
          </Map>
        </div>
      </div>


    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);