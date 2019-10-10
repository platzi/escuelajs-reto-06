import React from 'react';
import MapContainer from "../components/MapContainer";
import useInitialState from '../../hooks/useInitialState';
import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className="App">
      <MapContainer locations={initialState} />
    </div>
  );
};

export default App;