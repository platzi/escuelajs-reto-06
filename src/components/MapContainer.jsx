import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      textButton: 'Mostrar Mapa',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

    };
  }
  
  onMarkerClick = (props, marker, e) => this.setState ( {
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true,
  });

  onMapClicked = props => {
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  };

  handleClick = () => {
    const { show } = this.state;
    if (show) {
      this.setState({
        show: false,
        textButton: 'Mostrar Mapa'
      })
    } else {
      this.setState({
        show: true,
        textButton: 'Ocultar Mapa'
      })
    }
  }

  displayMakers = (locations) => {
    return locations.map( (location ) => {
      return (
        <Marker 
          onClick={this.onMarkerClick}
          key={location.venueName}
          position={{
            lat: location.venueLat,
            lng: location.venueLon
          }}
          name={location.venueName}
        />     
      )
    });
  };

  render() {
    const { google, locations} = this.props;
    const { show, textButton } = this.state;
    return (
      <div className="container">
        <Map onClick={this.onMapClicked}
          google={google}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={show}
        >
          {this.displayMakers(locations)}

          <InfoWindow 
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
        <div className="container_btn">
          <button className="btn_show" type="button" onClick={this.handleClick}>
            {textButton}
          </button>
        </div>
      </div>
    );
  } 
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);