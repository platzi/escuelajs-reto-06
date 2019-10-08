import { useEffect, useState } from 'react';

const usePlatziLocations = (API) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => {
        setLocations([]);
        console.error(error);
      });
  }, []);

  return locations;
};

export default usePlatziLocations;
