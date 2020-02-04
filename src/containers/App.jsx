/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [show, changeShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => changeShow(!show)}>
        {show ? 'Ocultar' : 'Mostrar'}
        Mapa
      </button>
      {show && <MapContainer /> }
    </div>
  )
};

export default App;
