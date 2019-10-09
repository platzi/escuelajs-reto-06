import React, { useState, useEffect } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

const App = () => {
  const [locations, setLocations] = useState([]);
  const [btnTxt, setBtnTxt] = useState('Show Map!');
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    if (visibility === false) {
      setBtnTxt('Hide Map!');
      setVisibility(true);
    } else {
      setBtnTxt('Show Map!');
      setVisibility(false);
    }
  };

  useEffect(() => {
    window
      .fetch(API)
      .then(response => response.json())
      .then(data => setLocations(data));
  }, []);

  return (
    <div className="App">
      <button type="button" onClick={handleClick}>
        {btnTxt}
      </button>
      {visibility ? (
        <MapContainer locations={locations} />
      ) : (
        <h1>Para mostrar el mapa necesitas presionar el boton ☝🏼</h1>
      )}
    </div>
  );
};

export default App;
