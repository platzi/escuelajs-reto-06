import React, { useState, useEffect } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [show, setShow] = useState(false);
  const API = 'http://localhost:3000/locations';
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API)    
      .then(responde => responde.json())
      .then(responde => setLocations(responde))
      .catch(erro => setError(erro));
    return() => {}

  },[]);

  const handleClick = () => {
    setShow(!show);
  };

  if (error) {
    return <div className="App">{error.toString()}</div>;
  }

  return (
    <div className="App">
      <h1>Bienvendo a nuestro sitio</h1>
      <h3>Conosco nuestras instalaciones:</h3>
      <button className='boton' type="button" onClick={handleClick}> 
      {show ? 'Ocultar Mapa' : 'Mostrar Mapa'} 
      </button>
      {show && <MapContainer locations={locations}/>}
    </div>
  );
};

export default App;