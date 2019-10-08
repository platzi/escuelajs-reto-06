import React, { useState, useEffect } from 'react';
import MapContainer from '../components/MapContainer';
import BtnShowMap from '../components/BtnShowMap';
import usePlatziLocations from '../hooks/usePlatziLocations';
import '../styles/containers/App.styl';

const API = 'http://localhost:3000/locations';

const App = () => {
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState('Show Map');
  
  useEffect(() => {
    return show ? setBtnText('Hide Map') : setBtnText('Show Map');
  }, [show]);

  const locs = usePlatziLocations(API);

  return (
    <div className='App'>
      <BtnShowMap text={btnText} onClick={() => setShow(!show)} />
      {
        show && 
        <MapContainer locations={locs} />
      }
    </div>
  );
};

export default App;
