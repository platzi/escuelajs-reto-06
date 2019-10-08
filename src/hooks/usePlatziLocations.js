import { useEffect, useState } from 'react';

const usePlatziLocations = (API) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, []);

  return locations;
};

export default usePlatziLocations;
