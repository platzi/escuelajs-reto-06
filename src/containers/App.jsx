import React from 'react';
import MapContainer from "../components/MapContainer";
import MapHeader from '../components/MapHeader';
import useLocation from '../hooks/useLocation';

import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

const App = () => {
  const locations = useLocation(API);
  return (
    <div className="wrapper-contact">
      <MapHeader />
      <MapContainer locations={locations} />
    </div>
  );
}

export default App;
