import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {

  constructor(props) { 
    super(props);
    this.state = { show: true, points: [] }
  }

  componentWillMount() { 
    const API = "http://localhost:3000/locations";
    // eslint-disable-next-line no-undef
    fetch(API).then(data => data.json())
      .then(response => { 
        const data = response.map(item => { 
          return { lat: item.venueLat , lng:item.venueLon , name:item.venueName }
        })
        this.setState({points:data})
      })
  }

  handleClick () { 
    const { show } = this.state;
    this.setState({show:!show})
  }

  render() { 
    
    const { google } = this.props;
    const { show  , points } = this.state;
    const bounds = new google.maps.LatLngBounds();

    points.forEach(point => {
      bounds.extend(point)
    })

    return (
      <Map
        google={google}
        zoom={5}
        visible={show}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        bounds={bounds}
      >
        {points.map((point) => {
          return <Marker position={point} name={point.name} title={point.name} />
        })
        }
        <button className="button" type="button" onClick={this.handleClick.bind(this)}> show Maps   </button>
      </Map>
    );
  }
 }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);