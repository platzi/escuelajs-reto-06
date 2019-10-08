import React, {useState} from 'react';
import CardMap from './CardMap';
import FormContact from './FormContact';
import MapContainer from "./MapContainer";
import '../styles/containers/Contact.styl';

const Contact = () => {
  const [show, setShow] = useState(true)
  return (
    <section className='Contact'>
      <div className='Contact__info'>
        <button className='Contact__info__boton' onClick={() => {setShow(!show)}} > {show ? 'Ocultar' : 'Mostrar'}</button>
        <FormContact />
        <h3 className='Contact__title'>Oficinas</h3>
        <CardMap name='Platzi Mexico' />
        <CardMap name='Platzi Bogotá' />
      </div>
      {show && <MapContainer />} 
    </section>
  )
};

export default Contact;