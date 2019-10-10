import React, { useState, useEffect }  from 'react';
import MapContainer from "./MapContainer";
import '../styles/containers/App.styl';
import fetch from 'node-fetch';

const App = () => {
  const API = 'http://localhost:3000/locations';

  const [showMap, setShowMap] = useState(false);
  const [locations, setLocations] = useState ([]);

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(point => {setLocations(point)});
  },[]);

    return (
      <div className="App">
        <button onClick={() => setShowMap(!showMap)}>
          Click para aparecer el mapa
        </button>
        {showMap && <MapContainer locations={locations} />}
       </div>
    )
  
};

export default App;
