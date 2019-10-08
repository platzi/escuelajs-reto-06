import React from 'react';
import '../styles/containers/FormContact.styl';

const FormContact = () => (
  
  <form className='FormContact'>
    <h3>Contactanos</h3>
    <label htmlFor='name' className='FormContact__name'>
      Nombre:
      <input id='name' type="text" name="name" />
    </label>
    <label htmlFor='email' className='FormContact__email'>
      Correo Electronico:
      <input id='email' type="email" name="email" />
    </label>
    <label htmlFor='descripcion' className='FormContact__descripcion'>
      Descripcion:
      <input id='descripcion' type="text" name="Descripcion" />
    </label>
    <div className='FormContact__enviar'>
      <input type="submit" value="Enviar" />
    </div>
  </form>
)

export default FormContact