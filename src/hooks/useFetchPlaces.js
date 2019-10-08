import {useState, useEffect} from 'react';

const useFetchPlaces = API => {
  const [locations, setLocations] = useState(
    [],
  );

  useEffect(() => {
  //   fetch(API)
  //     .then(response => response.json)
  //     .then(data => setLocations(data));
  // }, [] );

  setLocations([
    {
      "venueLat": 19.42672619,
      "venueLon": -99.1718706,
      "venueName": "Platzi HQ CDMX"
    },
    {
      "venueLat": 4.6560716,
      "venueLon": -74.0595918,
      "venueName": "Platzi HQ Bogota"
    }
  ]);
  }, [] );

  return locations;
};

export default useFetchPlaces;
