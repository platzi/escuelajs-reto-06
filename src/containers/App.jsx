import React,{useState, useEffect} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [show, setShow] = useState(false);
  const [locations, setLocations ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/locations')
      .then(response => response.json())
      .then(data => setLocations(data));
  },[]);

  return (
    <div className='main'>
      <div className='aside'>
        <button className='btn' type='button' onClick={() => setShow(!show)}>{show ? 'Hide Map':'Show Map'}</button>
      </div>
      <div>
        <MapContainer show={show} locations={locations} />
      </div>
    </div>
  )
};

export default App;

