import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class MapContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      show: false,
      showInfoWindow: false, 
      activeMarker: {}, 
      selectedPlace: {},
      locations:{} 
       }
  }

  componentWillMount(){
    console.log('component will mount') 
    
  }
  componentDidMount() {
    //console.log('component did mout')
    const URL = 'http://localhost:3000/locations'
    fetch(URL)
      .then(response => response.json())
      .then(response => this.setState({locations: response}))
      //console.log(this.state.locations)
}

  render(){
    console.log(this.state.locations[0]);
    console.log(this.state.locations[1]);
    return(
    
      <div>
        
        <button id="button"name="button" className="button">Click me</button>
       <Map className= "map"
        google={google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
        <Marker
          position={{ lat: 19.4267261, lng: -99.1718706 }}
        />
        
    </Map>
      </div>
     
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);