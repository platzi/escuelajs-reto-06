import React, { useState, useEffect } from 'react';
import Button from "../components/Button";
import '../styles/containers/Button.styl';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  // sitios guarda el estado,  setSitios permite actualizar el estado (sitios)
  const [ sitios, setSitios ] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/locations')
      .then(response => response.json())
      .then(data => setSitios(data));
  },[]);
  return (
    <div className="App">
      <Button />
      <section>
        <MapContainer locations={sitios}  />
      </section>
    </div>
  )
};

export default App;
