import React from 'react';
import {useState, useEffect} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const API_URL = ' http://localhost:3000/locations';

const App = () => {
  const [locations, setLocation] = useState([]);

  useEffect(()=>{
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setLocation(data))
  }, []);

  return (
    <div className="App">
      {console.log(locations)}
      <MapContainer data={locations} />
    </div>
  )
};

export default App;
