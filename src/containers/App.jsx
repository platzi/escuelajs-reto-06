/* eslint-disable react/button-has-type */
import React, {useState} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [show,setShow] =  useState(true)
  const handleClick = () => {setShow(!show)}

  return (
    <div className='App'>
      <button onClick={handleClick}>{show ? 'Ocultar Mapa' : 'Mostrar Mapa'}</button>
      {show && <MapContainer />}
    </div>
  )
};

export default App;
