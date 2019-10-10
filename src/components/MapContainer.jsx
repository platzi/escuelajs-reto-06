import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/components/MapContainer.styl';
import gif from '../assets/static/Click.gif';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMap = this.toggleMap.bind(this);
    this.state = { show: false};
  }

  toggleMap() {
    this.setState(state => ({
      show: !state.show,
    }));
  }
  
  render() {
    const { google, locations } = this.props;
    const { show } = this.state;
    return (
      <>
        <button className="Map__button" onClick={this.toggleMap} type="button">{show ? 'Ocultar Mapa' : 'Mostrar Mapa'}</button> 
        {
          show ? ( 
            <Map
              google={google}
              zoom={5}
              initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            >
              {locations.map((location, key) => (
                <Marker 
                  key={key}
                  position={{ lat: location.venueLat, lng: location.venueLon }}
                  name={location.venueName}
                />
              ))}
            </Map>
        ) : (
          <div>
            <img src={gif} alt="Dale click al botón" />
          </div>
        )
        }
      </>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);

