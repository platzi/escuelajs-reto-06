import React, { useState } from 'react';
import MapButton from '../components/MapButton';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import useLocation from '../hooks/useLocation';
const API = 'http://localhost:3000/locations';

const MapContainer = ({ google }) => {
  const [ showMap, setShowMap ] = useState(false);

  const toggleMap = () => {
    const stateMap = showMap ? false : true;
    setShowMap(stateMap);
  }

  const locations = useLocation(API);
  return (
    <div>
      <MapButton toggleMap={toggleMap} isMapVisible={showMap} />
      <Map
        google={google}
        style={{width: '100%', height: '400px', position: 'relative'}}
        className={'map'}
        zoom={4}
        initialCenter={{ lat: 15.1701174, lng: -89.5346629 }}
        visible={showMap}
      >
        {locations.map(item =>
          <Marker
            key={item.venueName}
            position={{lat: item.venueLat, lng: item.venueLon}}
          />
        )}
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);