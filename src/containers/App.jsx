import React, {Component} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false,
    };
    this.toggleMap = this.toggleMap.bind(this);
  }

  toggleMap () {
    this.setState(state => ({
      show: !state.show
    }));
  }

  render () {
    const show = this.state.show;

    return (
      <div className="App">
        <button type="button" onClick={this.toggleMap}>
          {show ? 'Mostrar' : 'Ocultar'} Mapa
        </button>
        {show ? (<p>No hay nada que mostrar</p>) : (<MapContainer />)}
      </div>
    )
  }
};

export default App;
