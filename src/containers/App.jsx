import React from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';
import useFetchPlaces from '../hooks/useFetchPlaces';

const API = 'http://localhost:3000/locations';

const App = () => {
  const locations = useFetchPlaces(API);

  return (
    <div className="App">
      <MapContainer locations={locations} />
    </div>
  )
};

export default App;
