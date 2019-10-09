import React, { useState , useEffect } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations'

const App = () => {
  
  const [locations, setMarker] = useState([]);
    useEffect(() => {
      fetch(API)
      .then(response => response.json())
      .then(dataLocations => setMarker(dataLocations))
    }, [])

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  
  return (
    <div className="App">
      <button onClick={handleClick}>{show ? 'Hide' : 'Show'}</button>
      {show && <MapContainer locations={locations} />}
    </div>
  )
};

export default App;