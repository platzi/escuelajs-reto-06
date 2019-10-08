import React from 'react';
import '../styles/components/MapButton.styl';

const MapButton = ({toggleMap, isMapVisible}) => {
  const buttonText = isMapVisible ? 'Ocultar oficinas' : 'Mostrar oficinas';
  return (
    <button className='button-map' onClick={toggleMap}>{buttonText}</button>
  );
}

export default MapButton;
