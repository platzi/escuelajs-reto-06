import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// = ({ google }) => 
class MapContainer extends React.Component {
  state = {
    show: false,
    textButton: 'Mostrar Mapa',
  }

  handleClick = () => {
    const { show, textButton } = this.state;
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

  render() {
    const { google} = this.props;
    const { show, textButton } = this.state;

    return (
      <div className="container">
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={show}
        >
          <Marker
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
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