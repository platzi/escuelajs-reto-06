import React, { useState } from 'react';
import Contact from '../components/Contact';
import Maps from '../components/Map';
import initialState from '../hooks/useInitialState';
import '../styles/containers/App.styl';

const App = () => {
  const data = initialState('http://localhost:3000/locations');
  const [view, setView] = useState(true);
  const toggleMap = () => {
    setView(!view);
  };
  return (
    <div className="App">
      <Contact show={view.map} toggle={toggleMap} />
      {view && <Maps map={data} />}
    </div>
  );
};

export default App;
