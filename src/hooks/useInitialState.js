import { useState, useEffect } from 'react';

function useInitialState(API) {
  const [locations, setMap] = useState([]);

  useEffect(() => {
    window.fetch(API)
      .then((response) => response.json())
      .then((data) => setMap(data));
  }, [])

  return locations;
}

export default useInitialState;
