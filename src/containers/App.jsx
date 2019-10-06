import React, { useState, useEffect } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [markers, setMarker] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/locations')
    .then(response => response.json())
    .then(myData => setMarker(myData))
  }, [])

  return (
    <div>
      <MapContainer markers={markers} />
    </div>
  )
};
export default App;
