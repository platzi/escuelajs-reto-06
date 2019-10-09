import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const API = 'http://localhost:3000/locations';

class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      textButton: 'Mostrar Mapa',
      locations: []
    };
  }
  
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({
        locations: data
      }))
      .catch((error) => console.error(error));
  }

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

  
  displayMakers = () => {
    const { locations } = this.state;
    console.log(locations);
    return locations.map( (location, index ) => {
      return (
        <Marker 
          id={index}
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
    const { google} = this.props;
    const { show, textButton } = this.state;
    
    return (
      <div className="container">
        <Map
          google={google}
          zoom={4}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={show}
        >
          {this.displayMakers()}
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