import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google }) => {
  const [show, setShow] = useState(false)
  const [locations, setLocations] = useState([])
  const [showingInfoWindow, setShowingInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [selectedPlace, setSelectedPlace] = useState({})

  useEffect(() => {
    window.fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(response => setLocations(response))
      .catch(e => window.console.log(e))
  }, [])

  const handleButton = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  const onMarkerClick = (props, marker) => {
    setSelectedPlace(props)
    setActiveMarker(marker)
    setShowingInfoWindow(true)
  }

  const onMapClicked = () => {
    setActiveMarker(null)
    setShowingInfoWindow(false)
  }

  return (
    <>
      <button type='button' onClick={handleButton}>
        {show ? 'Ocultar mapa' : 'Mostrar mapa'}
      </button>
      {show && (
      <Map
        onClick={onMapClicked}
        google={google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
        {locations.map((item) => {
          return(
            <Marker
              key={item.venueName}
              onClick={onMarkerClick}
              name={item.venueName}
              title={item.venueName}
              position={{ lat: item.venueLat, lng: item.venueLon }}
            />
          )
        })}
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
        >
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
      )}
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);