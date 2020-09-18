import React, { useState, useEffect } from 'react';
import MapContainer from "../components/MapContainer";
import getData from '../utils/getData';
import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

const App = () => {

  const [coord, setCoord] = useState([]);

  useEffect(() => {

    const fetch = async () => {
      const data = await getData(API);
      setCoord(data);
    }
    fetch();

  }, []);

  return (
    <div className="App">
      <MapContainer coord={coord} />
    </div>
  )
};

export default App;
