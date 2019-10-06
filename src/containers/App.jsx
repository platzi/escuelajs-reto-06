import React, { Component } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isShow: false,
      locations: {}
    }
  }
  
  handleClick = () => {
    const { isShow } = this.state;
    
    this.setState({ isShow: !isShow, });
    console.log(isShow)
  }
  
  componentDidMount =() =>{
    const { locations } = this.state;
    fetch(API)
    .then((response) => response.json())
    .then((data) => this.setState({locations: data}));
  }

  render(){
    const { isShow } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleClick}>Haz clic</button>
        <MapContainer isShow={isShow} locations={this.state.locations} />
      </div>
    )
  }
}

export default App;
