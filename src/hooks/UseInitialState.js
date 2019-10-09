import { useState, useEffect } from 'react';

const UseInitialSatete = (API) => {

  const [oficinas, setOficinas] = useState([{ "venueLat": 19.42672619,  "venueLon": -99.1718706,  "venueName": "Platzi HQ CDMX"}]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setOficinas(data));
  }, []);
  return oficinas;
};

export default UseInitialSatete;
