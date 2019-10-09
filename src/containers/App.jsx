import React from 'react';
import MapContainer from "../components/MapContainer";
import useFakeApi from '../hooks/useFakeApi';
import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

const App = () => {
  const fakeApi = useFakeApi(API);
  return fakeApi.length === 0 ? <h1>Cargando...</h1> : (
    <div className="App">
      <MapContainer data={fakeApi} />
    </div>
  )
};

export default App;
