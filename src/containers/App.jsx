import React, { useState, useEffect } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

const App = () => {

  const [location, setLocation] = useState([]);//maneja el estado: videos-es el nombre del estado, setVideos: funcion que cambia el estado

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setLocation(data));
  }, []);

  return (
    <div className="App">
      <MapContainer locations={location} />
    </div>
  )
};

export default App;
