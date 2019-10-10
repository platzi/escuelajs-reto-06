import React, { Component } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';
import '../styles/main.css';


class App extends Component {
  state = {
    show: false,
  }


  handleToggleShow = () => {
    this.setState({
      show: !this.state.show
    });
  }


  render() {
    const MAP = this.state.show ? <MapContainer /> : '';


    return (
      <div className="App">
        { MAP }

        <button
          className={`btn  ${this.state.show ? 'btn--is-active-view': 'btn--is-desactive-view'}`}
          onClick={this.handleToggleShow}
        >
          Mostrar mapa
        </button>

        <button
          className={`btn  btn--hidden  ${!this.state.show ? 'btn--is-active-hidden': 'btn--is-desactive-hidden'}`}
          onClick={this.handleToggleShow}
        >
          Ocultar mapa
        </button>
      </div>
    )
  }
}

export default App;

