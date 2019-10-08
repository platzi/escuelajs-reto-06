import React, { Component } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
      label: 'Mostrar Mapa',
      data: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  handleClick = () => {
    const {showMap} = this.state;
    const _label = !showMap ? 'Ocultar Mapa' : 'Mostrar Mapa';
    this.setState(state => ({
      showMap: !state.showMap,
      label: _label,
    }));
  };

  render() {
    const {label, showMap, data} = this.state;
    return (
      <div className="App">
        <button type="button" onClick={this.handleClick}>{label}</button>
        <MapContainer showMap={showMap} locations={data} />
      </div>
    );
  }
}

export default App;
