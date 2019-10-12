import { useState, useEffect } from 'react';

const UseInitialSatete = (API) => {

  const [oficinas, setOficinas] = useState([{ "venueLat": 19.42672619,  "venueLon": -99.1718706,  "venueName": "Platzi HQ CDMX"}]);
  useEffect(() => {
    window.fetch(API)
      .then((response) => response.json())
      .then((data) => setOficinas(data))
      .catch(e => window.console.log(e))
  }, []);
  return oficinas;
};

export default UseInitialSatete;
