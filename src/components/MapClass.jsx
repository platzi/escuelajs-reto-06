import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

// eslint-disable-next-line react/prefer-stateless-function
class MapContainer extends React.Component {
  state = {
    visible: false,
  };

  showMap = props => {
    if (!this.visible) {
      this.setState({
        visible: !this.state.visible,
      });
    }
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.showMap}>
          {this.state.visible ? 'Hide Map' : 'Show Map'}
        </button>
        <Map
          google={this.props.google}
          zoom={14}
          visible={this.state.visible}
          initialCenter={{
            lat: 19.4267261,
            lng: -99.1718706,
          }}
        >
          <Marker position={{ lat: 19.4267261, lng: -99.1718706 }} />
          <ConsoleLog>{this.state.visible}</ConsoleLog>
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper(props => ({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
  language: props.language,
}))(MapContainer);
