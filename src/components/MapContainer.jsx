import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import useFetchPlaces from '../hooks/useFetchPlaces';

class MapContainer extends React.Component {
  state = {
    show: false,
    textButton: 'Mostrar Mapa',
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

  displayMakers = ()=> {
    // const { locations } = this.state;
    const locations =  useFetchPlaces('http://localhost:3000/locations');
    // const locations = [
    //   {
    //     "venueLat": 19.42672619,
    //     "venueLon": -99.1718706,
    //     "venueName": "Platzi HQ CDMX"
    //   },
    //   {
    //     "venueLat": 4.6560716,
    //     "venueLon": -74.0595918,
    //     "venueName": "Platzi HQ Bogota"
    //   }
    // ]
    return locations.map( (location, index ) => {
      return (
        <Marker 
          id={index}
          key={index}
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