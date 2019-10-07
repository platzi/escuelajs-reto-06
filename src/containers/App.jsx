import React, { useState, useEffect } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const urlMarkers = 'http://localhost:3000/locations';
    fetch(urlMarkers)
      .then(response => response.json())
      .then(data => {
        setMarkers(data);
      });
  }, []);

  // console.table(markers);

  return (
    <div className="App">
      <MapContainer markers={markers} />
    </div>
  );
};

export default App;
