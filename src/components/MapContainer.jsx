import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      google: this.props.google,
      visible: true,
      text: 'Ocultar',
      points: this.props.points,
      selectedPlace: {},
      activeMarker: {},
      showingInfoWindow: true,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  handleClick() {
    let caption = 'Mostrar'
    if (!this.state.visible) {
      caption = 'Ocultar'
    } else {
      caption = 'Mostrar'
    }
    this.setState(state => ({
      visible: !state.visible,
      text: caption,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <button className="show" type="button" onClick={this.handleClick}>
          {this.state.text}
        </button>

        {this.state.visible && (
          <Map
            google={this.state.google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {this.state.points.map((point, i) => {
              return (
                <Marker
                  onClick={this.onMarkerClick}
                  key={`mark_${  i.toString() }`}
                  name={`mark_${  i.toString() }`}
                  title={point.venueName}
                  position={{ lat: point.venueLat, lng: point.venueLon }}
                />
              );
            })}

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h2>{this.state.selectedPlace.title}</h2>
              </div>
            </InfoWindow>
          </Map>
        )}
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
