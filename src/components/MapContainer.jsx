import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

export class MapContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      mapVisible : false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.handleClick = this.handleClick.bind(this);
    console.log('maps :', this.props.data)
  }

  handleClick() {
    this.setState(state => ({
      mapVisible: !state.mapVisible
    }));
  }

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

  render(){
    return(
      <section className="sectionMap">
        <button className="button" onClick={this.handleClick}>
          {this.state.mapVisible ? 'Ocultar Mapa' : 'Mostrar Mapa'}
        </button>
        <Map
          google={google}
          zoom={5}
          visible={this.state.mapVisible}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          onClick={this.onMapClicked}
        >
          {this.props.data.map((data, key) => (
            <Marker 
              key={[key]}
              name={data.venueName}
              onClick={this.onMarkerClick}
              position={{ lat: data.venueLat, lng: data.venueLon}}
            />
          )
          )}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </section>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);