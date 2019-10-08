import React, { useState, useEffect } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [show, changeShow] = useState(false);
  const [locations, addLocations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/locations')
      .then(response => response.json())
      .then(json => addLocations(json));
  },[])

  return (
    <div className="App">
      <button onClick={() => changeShow(!show)}>
        {show ? 'Ocultar' : 'Mostrar'} Mapa
      </button>
      {show && <MapContainer locations={locations} /> }
    </div>
  )
};

export default App;
