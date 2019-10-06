import React,{useState} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='main'>
      <div>
        <button type='button' onClick={() => setShow(!show)}>{show ? 'Hide Map':'Show Map'}</button>
      </div>
      <div>
        <MapContainer show={show} />
      </div>
    </div>
  )
};

export default App;

