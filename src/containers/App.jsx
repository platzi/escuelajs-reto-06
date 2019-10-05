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
   console.log("hola")
   console.log(this.state.info);

      // .then(response => {
      //   return response.json();
      // })
      // .then(data => {

      //   this.setState({ info: data });
      //   console.log(`Hola ${this.state.info}`);

      // })
      // .catch(error => console.log(error));
  }

  render() {
    return <MapContainer data={this.state.info} />;
  }
}

export default App;
