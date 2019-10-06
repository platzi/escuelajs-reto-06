import React from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';
const API = 'http://localhost:3000/locations';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }

 async componentDidMount() { 

   const fetch2= await fetch(API);
   const data = await fetch2.json();
   this.setState({ info: data });
 
  }

  render() {
    return <MapContainer data={this.state.info} />;
  }
}

export default App;
