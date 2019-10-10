import React from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';
import useFetchLocations from '../hooks/useFetchLocations';

const URL = 'http://localhost:3000/locations';

const App = () => {
  const locations = useFetchLocations(URL);
  return (
    <div className="App">
      <MapContainer locations={locations}/>
    </div>
  )
};

export default App;
