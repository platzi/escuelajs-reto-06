import React, {useEffect, useState} from 'react';
import fetch from 'node-fetch';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {

  const API = 'http://localhost:3000/locations'

  const [locations, setLocation] = useState([])

  useEffect( () => {

    fetch(API)
    .then( response => response.json() )
    .then( data => setLocation(data))},[]
  )

  return (
    <div className="App">
      <MapContainer locations={locations} />
    </div>
  )
};

export default App;
