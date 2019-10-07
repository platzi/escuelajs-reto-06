import React, { useState, useEffect } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [show, setShow] = useState(false);
  const [coordenada, setCoordenada] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/locations')
      .then(response => response.json())
      .then(data => setCoordenada(data));
  }, []);
  return (
    <div className="main">
      <div className="aside">
        <button className="btn" type="button" onClick={() => setShow(!show)}>
          {show ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>
      <div>
        <MapContainer show={show} coordenada={coordenada} />
      </div>
    </div>
  );
};

export default App;
