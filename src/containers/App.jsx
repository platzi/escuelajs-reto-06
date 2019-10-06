import React, { Component } from 'react';
import MapContainer from '../components/MapContainer';
import getMarkers from '../helpers/getMarkers';
import '../styles/containers/App.styl';

const API = `http://localhost:3000/locations`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      markers: [],
    };
    this.toggleMap = this.toggleMap.bind(this);
  }

  async componentDidMount() {
    const response = await getMarkers(API);
    this.setState({
      markers: response,
    });
  }

  toggleMap() {
    this.setState(state => ({
      show: !state.show,
    }));
  }

  render() {
    const { show, markers } = this.state;

    return (
      <div className="App">
        <button type="button" className="App__button" onClick={this.toggleMap}>
          {show ? 'Mostrar mapa' : 'Ocultar mapa'}
        </button>
        {show ? (
          <p>¿Mapa? ¿Qué mapa? Yo no veo ningún mapa</p>
        ) : (
          <MapContainer markersProps={markers} />
        )}
      </div>
    );
  }
}

export default App;
