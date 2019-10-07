import React, { useState, useEffect } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [locations, setLocations] = useState([]);

  const fetchData = async (URL) => {
    try {
      const result = await fetch(URL);
      const data = await result.json();
      setLocations(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData('http://localhost:3000/locations');
  }, []);

  return (
    <div className="App">
      <MapContainer locations={locations} />
    </div>
  )
};

export default App;
