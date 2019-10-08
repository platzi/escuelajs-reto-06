import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      google: this.props.google,
      visible: true,
      text: "Ocultar",
      points: this.props.points
    }
    console.log("-- Maping points")
    console.log(this.state.points);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let caption = "Mostrar";
    if(!this.state.visible) {
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
              {
                this.state.points.map( (point, i) => {
                  return(
                    <Marker
                      key={"mark_" + i.toString()}
                      name={"mark_" + i.toString()}
                      title={point.venueName}
                      position={{ lat: point.venueLat, lng: point.venueLon }}
                    />
                  )
                })
              }
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