import React from 'react';
import MapContainer from './MapContainer';
import '../styles/components/Contact.styl';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
    };
  }

  showMap = () => {
    const { showMap } = this.state;
    this.setState({
      showMap: !showMap,
    });
  };

  render() {
    const { showMap } = this.state;
    return (
      <section id="contact">
        <h1>Contacta a Platzi</h1>
        <p>
          No es necesario que busques ondas de radio perdidas en el espacio para
          contactar con nosotros.
        </p>
        <h4>Conoce nuestra sede más cercana</h4>
        <div className="button-container">
          <button type="button" className="button-green" onClick={this.showMap}>
            {showMap ? 'Ocultar' : 'Mostrar'}
            &nbsp;sedes
          </button>
        </div>
        <MapContainer showMap={showMap} />
      </section>
    );
  }
}

export default Contact;
