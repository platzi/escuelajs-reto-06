import React from 'react';
import MapContainer from './MapContainer';
import '../styles/components/Contact.styl';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
      markers: [],
    };
    this.MARKERS_API = 'http://localhost:3000/locations';

    // this.MARKERS_API =
    //   'https://my-json-server.typicode.com/gabrielpintop/platzi-markers-locations/locations';
  }

  componentDidMount() {
    this.loadMarkers();
  }

  loadMarkers = () => {
    // eslint-disable-next-line no-undef
    fetch(this.MARKERS_API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          markers: data,
        });
      });
  };

  showMap = () => {
    const { showMap } = this.state;
    this.setState({
      showMap: !showMap,
    });
  };

  render() {
    const { showMap, markers } = this.state;
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
        <MapContainer showMap={showMap} markers={markers} />
      </section>
    );
  }
}

export default Contact;
