import React, { useState, useEffect } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const API_LOCAL = 'http://localhost:3000/locations';

const App = () => {
  const [markers, serMarker] = useState([]);

  useEffect(() => {
    fetch(API_LOCAL)
    .then(response => response.json())
    .then(dataLocations => serMarker(dataLocations))
  }, [])

  return (
    <div className="App">
      <MapContainer markers={markers} />
    </div>
  )
};

export default App;