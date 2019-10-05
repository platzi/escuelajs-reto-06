import React, { useState, useEffect } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const API = 'http://localhost:3000/locations';
  const [show, setShow] = useState(false);
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(res => setLocations(res))
      .catch(err => setError(err));
    return () => {};
  }, []);

  const handleClick = () => {
    setShow(!show);
  };

  if (error) {
    return <div className="App">{error.toString()}</div>;
  }
  return (
    <div className="App">
      <button type="button" onClick={handleClick}>
        {show ? 'Ocultar' : 'Mostrar'}
      </button>
      {show && <MapContainer locations={locations} />}
    </div>
  );
};

export default App;
