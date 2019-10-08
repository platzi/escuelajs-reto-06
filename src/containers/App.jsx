import React from 'react';
import MapContainer from "../components/MapContainer";
import useLocations from '../hooks/useLocations';
import '../styles/containers/App.styl';

const API = " http://localhost:3000/locations";

const App = () => {
  const locations = useLocations(API);
  return (
    <div className="App">
      <MapContainer locations={locations} />
    </div>
  )
};

export default App;
