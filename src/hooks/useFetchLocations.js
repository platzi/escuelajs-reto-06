import {useState, useEffect} from 'react';

const useFetchLocations = URL => {
  const [locations, setLocations] = useState(
    [],
  );

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(location => setLocations(location));
  }, [] );


   return locations;
};

export default useFetchLocations;