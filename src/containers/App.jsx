import React, { useEffect, useState } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  // const locations = [
  //   {
  //     venueLat: 19.42672619,
  //     venueLon: -99.1718706,
  //     venueName: 'Platzi HQ CDMX',
  //   },
  //   {
  //     venueLat: 4.6560716,
  //     venueLon: -74.0595918,
  //     venueName: 'Platzi HQ Bogota',
  //   },
  // ];
  const [locations, setLocations] = useState([]);
  const getLocation = async () => {
    const response = await fetch(`http://localhost:3000/locations`);
    setLocations(response.json());
  };
  useEffect(() => {
    getLocation();
  });
  return (
    <div className="App">
      <MapContainer locations={locations} />
    </div>
  );
};

export default App;
