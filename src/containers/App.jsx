import React from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';
import useFetch from '../hooks/useFetchLotations';

const App = () => {
  const API = 'http://localhost:3000/locations';
  let locations = [];
  locations = useFetch(API);
  return (
    <div className="App">
      <MapContainer locations={locations} />
    </div>
  );
};

export default App;
