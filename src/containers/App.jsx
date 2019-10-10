import React from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/locations';

const App = () => {

  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <div className="App">
      <MapContainer data={initialState} />
    </div>
    );
};

export default App;
