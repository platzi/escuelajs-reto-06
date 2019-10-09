import React, {useState} from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [showMap, setShowMap] = useState(false);

  if(showMap === true){
    return (
      <div className="App">
        <button type='button' onClick={() => setShowMap(false)}>Mostrar Mapa</button>
        <MapContainer />
      </div>
    ) 
  }

  return (
    <div className="App">
      <button type='button' onClick={() => setShowMap(true)}>Mostrar Mapa</button>
    </div>
  )
};

export default App;
