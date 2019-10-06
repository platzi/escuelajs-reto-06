import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      google: this.props.google,
      visible: true,
      text: "Show"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let caption = "Mostrar";
    if(this.state.visible) {
      caption = "Ocultar";
    } else {
      caption = "Mostrar";
    }
    this.setState(state => ({
      visible: !state.visible,
      text: caption
    }));
  }

  render () {
    /* var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    } */

    return (
      <React.Fragment>

        <button className="show" type="button" onClick={this.handleClick}>{this.state.text}</button>
        
        {
          this.state.visible && (
            <Map
          
              google={this.state.google}
              zoom={5}
              initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            >
              <Marker
                name="CDMX"
                title="PLatzi CDMX"
                position={{ lat: 19.4267261, lng: -99.1718706 }}
              />
              <Marker
                name="Colombia"
                title="PLatzi Bogotá"
                position={{ lat: 4.6560716, lng: -74.0595918 }}
              />
            </Map>
          )
        }
        
      </React.Fragment>
    );
  }
  
};


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);