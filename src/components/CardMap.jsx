import React from 'react';
import '../styles/containers/CardMap.styl';

const CardMap = ({name, venueLat, venueLon}) => (
  <section className='CardMap'>
    <h3>{name}</h3>
    <p>Latitud: {venueLat}</p>
    <p>Longitud: {venueLon}</p>
  </section>
)

export default CardMap;