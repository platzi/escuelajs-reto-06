import React, { Component } from 'react';
import fetch from 'node-fetch';
import MapContainer from '../components/MapContainer';
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
    const response = await this.getMarkers();
    this.setState({
      markers: response,
    });
  }

  async getMarkers() {
    try {
      const response = await fetch(API, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        return Promise.reject(new Error(`Error fetching url: ${API}`));
      }

      return Promise.resolve(await response.json());
    } catch (error) {
      return Promise.reject(new Error(error.message));
    }
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
