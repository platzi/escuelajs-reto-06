import React, { useState, useEffect } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const url = 'http://localhost:3000/locations';

const App = () => {
  const [markers, serMarker] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(myData => serMarker(myData))
  }, [])

  return (
    <div className="App">
      <MapContainer markers={markers} />
    </div>
  )
};

export default App;
