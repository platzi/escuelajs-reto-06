import React, { useState, useEffect } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [points, setPoints] = useState([]);
  const API = 'http://localhost:3000/locations';
  
  useEffect(() => { 
    fetch(API)
    .then(response => response.json())
    .then(data => setPoints(data))
    .catch(error => {throw new Error(error)});
  }, []);

  return (
    <div className="App">
      <MapContainer locations={points} />
    </div>
  )
};

export default App;
