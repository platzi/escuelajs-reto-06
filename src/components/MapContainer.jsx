import React from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {

  state = {
    showingMap: true,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }
  
  handleClick = () => {
		const { showingMap } = this.state;
		this.setState({
			showingMap: !showingMap,
		});
  }

  onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

  onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };


  render() {
    const { showingMap } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Show/Hide</button>
        {showingMap && (			
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 13.937875, lng: -86.830851 }}
            visible={true}
          >
            {this.props.APIdata.map(item => (
              <Marker
                key={item.venueName} 
                name={item.venueName} 
                position={{ lat: item.venueLat, lng: item.venueLon }}
                onClick={this.onMarkerClick}
              />
            ))}
              
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                  <div>
                    <h2 className="map-InfoWindow">{this.state.selectedPlace.name}</h2>
                  </div>
              </InfoWindow>
          </Map>
				)}
      </div>  
      );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
