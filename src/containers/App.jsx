import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import MapContaienr from '../components/FinalMapContainer';

const API = 'http://localhost:3000/locations';
const App = () => {

const [markers, setMarker] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(locations => setMarker(locations));
  }, [])

  return (
    <div className="App">
      <MapContaienr markers={markers} />
    </div>
  )
};

export default App;
