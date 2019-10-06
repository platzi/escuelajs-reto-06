import React from 'react';
/**
 * Component tha show the info marker
 * 
 * @param {nama} first Name of location
 */
const InformationContainer = ({name}) => {
  return (
    <div className='info-container'>
      <h1>{name}</h1>
    </div>
  )
};

export default InformationContainer;