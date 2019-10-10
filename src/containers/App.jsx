import React from 'react';
import MapContainer from "../components/MapContainer";

import '../styles/containers/App.styl';
import useInitialState from '../hooks/useInitialState.js'

const App = () => {
  return (
    <div className="App">
      <MapContainer/>
    </div>
  )
};

export default App;
