import { useState, useEffect } from 'react';

const useInitialState = API => {
    const [cities, setCities] = useState({
        headquarters: [],
    });

    useEffect(() => {
        // eslint-disable-next-line no-undef
        fetch(API)
            .then(response => response.json())
            .then(data => setCities(data));
    }, []);
    return cities;
};

export default useInitialState; 