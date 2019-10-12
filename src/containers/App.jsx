import React, {useState, useEffect} from 'react';
import MapContainer from "../components/MapContainer";

import useInitialState from '../hooks/useInitialState';

import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

const App = () => {
  const locations = useInitialState(API);
  return (
    <div className="App">

      <h1>CONTACTO</h1>

      <MapContainer locations={locations} />


    </div>
  )
};

export default App;
