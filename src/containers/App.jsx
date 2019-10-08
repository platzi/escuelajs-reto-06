import React, { Component } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      api_url: 'http://localhost:3000/locations',
    };
  }

  componentDidMount() {
    fetch(this.state.api_url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setLocations(data);
      });
  }

  setLocations(locations_array) {
    this.setState({
      locations: locations_array,
    });
  }

  render() {
    return (
      <div className="App">
        <MapContainer points={this.state.locations} />
      </div>
    );
  }
}

export default App;
