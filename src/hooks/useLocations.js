import { useState, useEffect } from 'react'

const useLocations = (api) => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        fetch(api)
            .then(reponse => reponse.json())
            .then(responseLocations => setLocations(responseLocations));
    }, []);

    return locations;
}

export default useLocations;