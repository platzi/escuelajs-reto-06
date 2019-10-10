import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ locations, setLocations ] = useState([{ locations: [] }]);
    // useEffect() se ejecutarà cuando se monte el componente (App)
    useEffect(() => {
      fetch(API)
        .then(response => response.json())
        .then(data => {
          setLocations(data)});
    }, []);
    return (locations);
};

export default useInitialState;

