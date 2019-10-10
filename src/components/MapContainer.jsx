import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


class MapContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      show: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
       }
  }

  handleClick = () => {
    const { show } = this.state;
    if (show) {
      this.setState({
        show: false,
      })
    } else {
      this.setState({
        show: true,
      })
    }
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

  showMakers = (locations) => {
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
  
  render(){
    const { google, locations} = this.props;
    const { show } = this.state;
    console.log(this.props.locations)
    return(
 
    
      <div>
        
        <button id="button"name="button" className="button" onClick={this.handleClick}>Click me</button>
       <Map onClick={this.onMapClicked}
        className= "map"
        visible={show}
        google={google}
        zoom={3}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
         {this.showMakers(locations)}

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
     
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);