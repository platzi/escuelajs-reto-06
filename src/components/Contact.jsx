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
        <h2>Ubica nuestras sedes</h2>
        <p>Selecciona las sedes que quieres visualizar en el mapa</p>
        <label htmlFor="bog">
          <input type="checkbox" name="bog" id="bog" />
          <div className="slide round">Bogotá</div>
        </label>
        <label htmlFor="mx">
          <input type="checkbox" name="mx" id="mx" />
          <div className="slide round">CDMX</div>
        </label>
      </form>
      <button onClick={() => props.toggle()}>Ver mapa</button>
    </div>
  );
};

export default Contact;
