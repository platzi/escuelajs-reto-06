import { useState, useEffect } from 'react';

const useFakeApi = (API) => {
    const [ locations, setLocations ] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setLocations(data));
    }, []);

    return locations;   
};

export default useFakeApi;