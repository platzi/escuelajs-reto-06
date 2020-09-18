/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {

  state = {
    show: false,
  }

  handleBtnHide = () => {

    const { show } = this.state;

    if (show) {
      this.setState({
        show: false,
      })
    } else {
      this.setState({
        show: true,
      });
    }
  }

  render() {

    const { google, coord } = this.props;
    const { show } = this.state;

    return(
      <>
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          visible={show}
        >
          {coord.map((item, i) => (
            <Marker
              position={{ lat: item.venueLat, lng: item.venueLon }}
              key={i}
            />
        ))}
        </Map>
        {show ? (
          <button type='button' className='btn-hide' onClick={this.handleBtnHide}>Hide</button>
        ) : (
          <button type='button' className='btn-show' onClick={this.handleBtnHide}>Show Map</button>
        )
        }
      </>
    );
  };
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);