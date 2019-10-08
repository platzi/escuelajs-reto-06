import React, {useState, useEffect} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ google }) => {
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState([]);

  useEffect (() => {
    fetch('http://localhost:3000/locations')
      .then(response => response.json())
      .then(data => setLocation(data));
  }, []);

  if (showMap === true){
    return (
      <Map
        google={google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
        {location.map((item) => (
          <Marker
            key={item.id}
            position={{ lat: item.venueLat, lng: item.venueLon }}
          />
        ))}
      </Map>
    )
  }
  return (
    <div><button type='button' onClick={() => setShowMap(true)}>Mostrar Mapa</button></div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);