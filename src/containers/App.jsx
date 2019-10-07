import React, { useState } from 'react';
import Contact from '../components/Contact';
import Maps from '../components/Map';
import Image from '../components/Image';
import initialState from '../hooks/useInitialState';
import '../styles/containers/App.styl';

const App = () => {

  const data = initialState('http://localhost:3000/locations');
  const [info, changeData] = useState({
    map: false,
    titleButton: 'Ver mapa',
  });

  const toggleMap = () => {
    changeData({
      map: !info.map,
      titleButton: info.map === true ? 'Ver mapa' : 'Ocultar mapa',
    });
  };

  return (
    <div className="App">
      <Contact show={info.map} toggle={toggleMap} info={info} />
      {info.map ? <Maps map={data} info={info} /> : <Image/> }
    </div>
  );
};

export default App;
