import React, { useState, useEffect } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [locations, setLocations] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/locations')
      .then(data => data.json())
      .then(res => setLocations(res));
  }, []);

  const handlerShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <button className="ButtonHandler" onClick={handlerShow}>
        {show ? 'Ocultar' : 'Mostrar'}
      </button>
      {show && <MapContainer locations={locations} />}
    </div>
  );
};

export default App;
