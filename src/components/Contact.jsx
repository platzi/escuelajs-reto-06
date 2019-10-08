import React from 'react';
import CardMap from './CardMap';
import FormContact from './FormContact';
import MapContainer from "./MapContainer";
import '../styles/containers/Contact.styl';

const Contact = () => {
  return (
    <section className='Contact'>
      <div className='Contact__info'>
      <FormContact />
        <CardMap />
      </div>
      <MapContainer />
    </section>
  )
};

export default Contact;