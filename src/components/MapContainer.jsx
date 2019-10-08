import React,{Component} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../styles/components/MapContainer.scss';

class MapContainer extends Component{

  
    constructor(props){
      super(props)
      this.handlerClick = this.handlerClick.bind(this)
      this.onMapClicked = this.onMapClicked.bind(this)
      this.onMarkerClick = this.onMarkerClick.bind(this)
      
      this.state = {
        show: false,
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow:false
      }   

    }
    
    onMarkerClick(props,marker){
      this.setState( previousState => {
          return {
            ...previousState,
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow:true
          }
      })
    }

    onMapClicked = () => {
      const {showingInfoWindow} = this.state
      if (showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    }

    handlerClick(){
      this.setState((previousState => {
        return {show: !previousState.show}
      }))
    }

    render(){

      const {google, locations } = this.props

      const {show, activeMarker, selectedPlace, showingInfoWindow} = this.state

      return (
        <div>
          
          <Map
            google={google}
            zoom={5}
            visible={show}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
            onClick={this.onMapClicked}
          >
            {locations.map( location => {
              return (
                <Marker 
                  key={location.venueName} 
                  position={{ lat: location.venueLat, lng:  location.venueLon }} 
                  name={location.venueName} 
                  onClick={this.onMarkerClick}
                />
                )
            })
            }  
            <InfoWindow
              marker={activeMarker}
              visible={showingInfoWindow}
            >
              <div>
                <h1>{selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        
          <div>
            <button type="button" onClick={this.handlerClick}>Show</button>
          </div>
        </div>
      );
    }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);