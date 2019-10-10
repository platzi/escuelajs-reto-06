import React, {useState, useEffect} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google }) => {
  
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect (() => {
    fetch('http://localhost:3000/locations')
      .then(response => response.json())
      .then(data => setLocation(data));
  }, []);

  return (
    <Map
      google={google}
      zoom={4}
      initialCenter={{ lat: 13.0000000, lng: -85.0000000 }}
    >
      {location.map((item) => (
        <Marker
          key={item.id}
          position={{ lat: item.venueLat, lng: item.venueLon }}
          onClick={() => {setSelectedLocation(item)}}
        />
      ))}

      {selectedLocation && (
        <InfoWindow>
          <div>Location</div>
        </InfoWindow>
      )}

    </Map>
  )
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);