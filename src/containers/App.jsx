import React from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';
import useInitialState from '../hooks/useInitialState';
  
const API = 'http://localhost:3000/locations';

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <h2>Mapa</h2>
        <MapContainer 
          APIdata = {initialState}
        />
    </div>
  )
};

export default App;
