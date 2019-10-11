import React, { useState, useEffect } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(x => setData(x));
  }, []);

  return (
    <div className="App">
      <MapContainer data={data} />
    </div>
  );
};

export default App;
