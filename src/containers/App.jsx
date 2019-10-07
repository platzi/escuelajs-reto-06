/* eslint-disable react/button-has-type */
import React, {useState,useEffect} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

const App = () => {
  const [show,setShow] =  useState(true)
  const handleClick = () => {setShow(!show)}

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(API)
      .then(response => response.json())
      // eslint-disable-next-line no-undef
      .then(data => setLocations(data));
  },[]);

  return (
    <div className='App'>
      <button onClick={handleClick}>{show ? 'Ocultar Mapa' : 'Mostrar Mapa'}</button>
      {show && <MapContainer />}
    </div>
  )
};

export default App;
