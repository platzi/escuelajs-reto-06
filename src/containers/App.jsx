import React from 'react';
import Button from "../components/Button";
import '../styles/containers/Button.styl';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  return (
    <div className="App">
      <Button />
      <section>
        <MapContainer />
      </section>
    </div>
  )
};

export default App;
