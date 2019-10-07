import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import icon from '../static/location.png';

const Maps = props => {
  const infoMap = props.map;
  const [info, setInfo] = useState({
    isOpen: false,
    marker: {},
    place: {},
  });
  const onMarkerClick = (props, marker) => {
    setInfo({
      place: props,
      marker: marker,
      isOpen: true,
    });
  };
  return (
    <div className="App-map">
      <Map
        google={google}
        zoom={4}
        initialCenter={{ lat: 10.5943885, lng: -60.9526044 }}
      >
        {infoMap.map(item => {
            return (
              <Marker
                key={item.id}
                name={item.venueName}
                img={item.image}
                position={{ lat: item.venueLat, lng: item.venueLon }}
                onClick={(props, marker) => {
                  onMarkerClick(props, marker);
                }}
                icon={{
                  url:
                  icon,
                  anchor: new google.maps.Point(16, 16),
                  scaledSize: new google.maps.Size(25, 30),
                }}
              />
            );
        })}
        <InfoWindow marker={info.marker} visible={info.isOpen}>
          <div className="popup">
            <img
              src={info.place.img}
              alt={info.place.name}
              className="popup-img"
            />
            <span className="popup-text">{info.place.name}</span>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(Maps);
