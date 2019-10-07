import React from 'react';
import MapContainer from "../components/MapContainer";
import MapTitle from '../components/MapTitle';
import '../styles/containers/App.styl';

const App = () => {
  return (
    <div className="App">
      <MapTitle />
      <MapContainer />
    </div>
  );
}

export default App;
