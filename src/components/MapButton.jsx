import React from 'react';

const MapButton = ({toggleMap, isMapVisible}) => {
  const buttonText = isMapVisible ? 'Ocultar Mapa' : 'Mostrar Mapa';
  return (
    <button onClick={toggleMap}>{buttonText}</button>
  );
}

export default MapButton;
