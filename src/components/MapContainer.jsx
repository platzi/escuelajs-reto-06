import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState(state => ({ isShow: !state.isShow }));
  }

  render() {
    const {google, markers} = this.props;
    const {isShow} = this.state;
    return (
      <>
        <div className='div__button'>
          <button type='button' onClick={this.handleClick}>Mostrar</button>  
        </div>     
        {isShow && (
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {markers.map((item, i) => <Marker key={i} position={{ lat: item.venueLat, lng: item.venueLon }} /> )}            
          </Map>
        )}
        
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);