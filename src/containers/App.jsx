import React, { useState, useEffect } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const API = " http://localhost:3000/locations";

const App = () => {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
     fetch(API)
      .then(reponse => reponse.json())
      .then(responseLocations => setLocations(responseLocations));
  }, []);

  return (
    <div className="App">
      <MapContainer locations={locations} />
    </div>
  )
};

export default App;
