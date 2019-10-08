import { useState, useEffect } from 'react';

const setInitialState = (api) => {

  const [state, setState] = useState({
    locations: []
  });
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setState({locations: data}));    
  }, []);
  return state;
};

export default setInitialState;