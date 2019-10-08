import React, { useState, useEffect } from 'react';
import MapContainer from '../components/MapContainer';
import BtnShowMap from '../components/BtnShowMap';
import '../styles/containers/App.styl';

const App = () => {
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState('Show Map');

  useEffect(() => {
    return show ? setBtnText('Hide Map') : setBtnText('Show Map');
  }, [show]);

  return (
    <div className='App'>
      <BtnShowMap text={btnText} onClick={() => setShow(!show)} />
      {
        show && 
        <MapContainer />
      } 
    </div>
  )
};

export default App;
