import React, {useState} from 'react';
import CardMap from './CardMap';
import FormContact from './FormContact';
import MapContainer from "./MapContainer";
import UseInitialState from '../hooks/UseInitialState'
import '../styles/containers/Contact.styl';

const API = 'http://localhost:3000/locations'

const Contact = () => {
  const [show, setShow] = useState(true)
  const initialState = UseInitialState(API);

  return (
    <section className='Contact'>
      <div className='Contact__info'>
        <button type='button' className='Contact__info__boton' onClick={() => {setShow(!show)}}> 
          {show ? 'Ocultar' : 'Mostrar'}
        </button>
        <FormContact />
        <h3 className='Contact__title'>Oficinas</h3>
        {initialState.map((item) => <CardMap key={item.venueName} name={item.venueName} venueLat={item.venueLat} venueLon={item.venueLon} /> )}
      </div>
      {show && <MapContainer />} 
    </section>
  )
};

export default Contact;