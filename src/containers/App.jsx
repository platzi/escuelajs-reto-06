import React, { Component } from 'react'
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

export default class App extends Component {

  state = {
    locations: []
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3000/locations')
    const data = await res.json()
    this.setState({
      locations: data
    })
  }
  render() {
    return (
      <div className="App">
        <MapContainer locations={this.state.locations}/>
      </div>
    )
  }
};