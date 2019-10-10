import React, {useState, useEffect} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const API = 'http://localhost:3000/locations';
    window.fetch(API)
      .then(response => response.json())
      .then(data => setLocations(data));
  },[])

  return (
    <div className="App">
      <MapContainer locations={locations} />
    </div>
  );
};

export default App;
