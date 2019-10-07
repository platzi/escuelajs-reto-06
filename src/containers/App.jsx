import React, { Component } from 'react';
import MapContainer from '../components/MapContainer';
import Loading from '../components/Loading';
import NoMap from '../components/NoMap';
import getMarkers from '../helpers/getMarkers';
import '../styles/containers/App.styl';

const API = `http://localhost:3000/locations`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isLoading: true,
      markers: [],
    };
    this.toggleMap = this.toggleMap.bind(this);
  }

  async componentDidMount() {
    const response = await getMarkers(API);
    this.setState({
      markers: response,
      isLoading: false,
    });
  }

  toggleMap() {
    this.setState(state => ({
      show: !state.show,
    }));
  }

  render() {
    const { show, markers, isLoading } = this.state;

    return (
      <div className="App">
        {isLoading && <Loading />}
        {!isLoading && (
          <React.Fragment>
            <button
              type="button"
              className="App__button"
              onClick={this.toggleMap}
            >
              {show ? 'Mostrar mapa' : 'Ocultar mapa'}
            </button>
            {!show ? <MapContainer markersProps={markers} /> : <NoMap />}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
