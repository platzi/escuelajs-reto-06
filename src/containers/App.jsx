import React, { useEffect, useState } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const API='http://localhost:3000/locations';

const App = () => {
  const [marker, setMarker] = useState([]);

  useEffect(()=> {
    fetch(API)
    .then(response => response.json())
    .then(data => setMarker(data))
  }, []);
 
  return (
    <div className="App">
      { marker.length > 0 ? 
        <MapContainer  item={marker}/> 
        : <div> Loading ... </div>
      }
      
    </div>
  )
};

export default App;
