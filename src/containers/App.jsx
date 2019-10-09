import React, { useState, useEffect }from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';
const API = 'http://localhost:3000/locations';

const App = () => {
  const[maps, setMaps] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setMaps(data));
  }, []);

  console.log(maps);

  return (
    <div className="App">
      <MapContainer data={maps}/>
    </div>
  )
};

export default App;
