import React, { useState } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>
      {show && <MapContainer />}
    </div>
  );
};

export default App;
