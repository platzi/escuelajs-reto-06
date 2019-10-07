/* eslint-disable react/button-has-type */
import React from 'react';

const Contact = props => {
  return (
    <div className="App-info">
      <h1>Contáctenos</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellidos" />
        <input type="text" placeholder="Correo electrónico" />
        <input type="text" placeholder="Número de contacto" />
        <input type="submit" value="Enviar" />
        <h2>Ubica nuestras sedes</h2>
      </form>
      <p>Puedes ver la ubicación de nuestras sedes haciendo clic en el siguiente botón</p>
      <button onClick={() => props.toggle()}>{props.info.titleButton}</button>
    </div>
  );
};

export default Contact;
