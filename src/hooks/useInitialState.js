import { useState, useEffect } from 'react';

const initialState = API => {
  const [maps, setMaps] = useState('');
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setMaps(data));
  }, []);
  return maps;
};

export default initialState;
