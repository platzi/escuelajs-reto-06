import { useState, useEffect } from 'react';

const fetch = require('node-fetch');

const useFetchLocations = API => {
  const [locations, setLocations] = useState({
    locations: [],
  });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setLocations(data));
  }, []);

  return locations;
};

export default useFetchLocations;
