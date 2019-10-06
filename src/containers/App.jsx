import React, { useState } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <div style={{ padding: '15px' }}>
        <button onClick={() => setShow(!show)} type="button">
          Mostrar/Ocultar
        </button>
      </div>
      {show && <MapContainer />}
    </div>
  );
};

export default App;
