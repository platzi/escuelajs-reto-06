import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class MapContainer extends React.Component {

  constructor(props) { 
    super(props);
    this.state = {show:true}
  }

  handleClick () { 
    const { show } = this.state;
    this.setState({show:!show})
  }


  render() { 

    const { google } = this.props;
    const { show } = this.state;

    return (
      <Map
        google={google}
        zoom={5}
        visible={show}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
        <Marker
          position={{ lat: 19.4267261, lng: -99.1718706 }}
        />
        <button className="button" type="button" onClick={this.handleClick.bind(this)}> show Maps   </button>
      </Map>
    );
  }
 }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);