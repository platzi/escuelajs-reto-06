import React from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    show: false,
    locations: [],
  };

  componentDidMount() {
    this.getResultsApi();
  }

  // No tiene los presets para "presets": [ "es2015", "stage-0" ] para usar async-await o no me funciono a mi
  // Se que no debe llevar comentarios, pero personalmente prefiero algo como create react app
  // Porque no me centro en configuracion si no en desarrollo.
  getResultsApi = () => {
    const url = `http://localhost:3000/locations`;
    const ResultLocations = axios.get(url);
    ResultLocations.then(res => {
      this.setState({
        locations: res.data,
      });
    });
  };

  handleToogleMap = e => {
    const estado = this.state;

    e.preventDefault();
    if (estado.show === false) {
      this.setState({
        show: true,
      });
    } else {
      this.setState({
        show: false,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="Header__header--main">
          <div className="Header__logo">
            <h1 className="Header__logo--h1">Logo</h1>
          </div>
          <div className="Header__menu">
            <ul>
              <li>Inicio</li>
              <li>Acerca de</li>
              <li>
                <a href="!#" onClick={this.handleToogleMap}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
        <MapContainer estado={this.state} />
      </div>
    );
  }
}

export default App;
