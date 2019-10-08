# Escuelajs-reto-06
Reto 6 Octubre 5: Curso Práctico de React JS

## Platzi Maps

Tenemos un proyecto web, donde debemos trabajar con la API de Google de mapas, tenemos que mostrar en un Mapa las ubicaciones de las oficinas de Platzi.

![Google-maps](https://raw.githubusercontent.com/platzi/escuelajs-reto-06/master/screenshot.png?token=ACQQY5TB2DOOKO5CD7LURB25UFNGK)

### Instalación
```
npm install
```

### Ejecución
```
npm run start
```

### Server
```
npm run server
```

### Compilar
```
npm run build
```

### Documentación
Importar React y el paquete [google-maps-react](https://www.npmjs.com/package/google-maps-react)

```javascript
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
```
Creamos un componente llamado MapContainer donde vamos a crear la lógica para crear un nuevo mapa.

```javascript
const MapContainer = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={5}
      initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
    >
      <Marker
        position={{ lat: 19.4267261, lng: -99.1718706 }}
      />
    </Map>
  );
}
```

Utilizamos GoogleApiWrapper que es un HOC (Higher-Order component) acepta un objeto que contiene el apiKey.

```javascript
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
```

## RETO

### Primer problema
Necesitamos que nuestra aplicación tenga una sección de contacto con un mapa de Google Maps, donde puedas tener un botón que oculta o muestra el botón.

1) Convertir el componente 'MapContainer.jsx' a Clase
2) Añadir 'show' en 'false' en el estado de la aplicación
3) Agregar un botón que muestre y oculte el mapa.


### Segundo Problema

Tenemos por defecto en nuestra Mapa la Ubicación de Platzi HQ México, debemos de añadir al mapa la Ubicación de Platzi HQ Bogotá.

1) Leer la documentación de '[google-maps-react](https://www.npmjs.com/package/google-maps-react)' para implementar multiples Markers
2) Agrega Platzi HQ Bogotá: LAT: 4.6560716 LON: -74.0595918
## SOLUCION A PRIMERO Y SEGUNDO PROBLEMA:

```js
//MapContainer.jsx
const MapContainer = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={5}
      initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
    >
      <Marker
        position={{ lat: 19.4267261, lng: -99.1718706 }}
      />
    </Map>
  );
}
```
cambio 
```js
class MapContainer extends Component {
  render() {
    const { google } = this.props;
    return (
      <Map
        google={google}
        zoom={4}
        initialCenter={{ lat: 4.6560716, lng: -74.0595918 }}
      >
        <Marker position={{ lat: 19.4267261, lng: -99.1718706 }} />
        <Marker position={{ lat: 4.6560716, lng: -74.0595918 }} />
      </Map>
    );
  }
}
``` //App.jsx
```js
import React from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  return (
    <div className="App">
      <MapContainer />
    </div>
  )
};

export default App;
// ********************SOLUCION*************
import React, { useState } from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <button className='boton' onClick={handleClick}> {show ? 'Ocultar Mapa' : 'Mostrar Mapa'} </button>
      {show && <MapContainer />}
    </div>
  );
};
export default App;
```
### Tercer Problema

Ahora utiliza la API propuesta

Para ejecutar la Fake API debes de correr el siguiente comando:

```bash
json-server locations.json
```
1) Inicia y analiza el funcionamiento de la FAKE API de 'locations'
2) Haz un llamado a la API desde el proyecto por medio de fetch
3) Por medio de 'props' pasa al componente 'MapContainer.jsx' el resultado de la consulta a la FAKE API.
4) Itera por cada una de las ubicaciones que tiene Platzi y muéstralas en el Mapa.

### Cuarto Problema (Opcional)

Ahora que tenemos nuestra aplicación Funcionando, utiliza la documentación del paquete instalado para aprender e implementar un 'infoView' por cada ubicación de Platzi

1) Leer la documentación de '[google-maps-react](https://www.npmjs.com/package/google-maps-react)' para implementar 'infoView'
2) Implementa un 'infoView' por cada ubicación debes de utilizar la información de la FAKE API.
3) Muestra el nombre de la oficina de Platzi al dar clic en el Maker.

<!-- // ********************SOLUCION************* -->
```js  
// ************App.jsx
const App = () => {
  const [show, setShow] = useState(false);
  const API = 'http://localhost:3000/locations';
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API)    
      .then(responde => responde.json())
      .then(responde => setLocations(responde))
      .catch(erro => setError(erro));
    return() => {}

  },[]);

  const handleClick = () => {
    setShow(!show);
  };

  if (error) {
    return <div className="App">{error.toString()}</div>;
  }

  return (
    <div className="App">
      <h1>Bienvendo a nuestro sitio</h1>
      <h3>Conosco nuestras instalaciones:</h3>
      <button className='boton' type="button" onClick={handleClick}> 
      {show ? 'Ocultar Mapa' : 'Mostrar Mapa'} 
      </button>
      {show && <MapContainer locations={locations}/>}
    </div>
  );
};

export default App;

// **************************MapContainer.jsx
class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props,
    });
  };

  render() {
    const { google, locations } = this.props;
    const { activeMarker, showingInfoWindow, selectedPlace } = this.state;

    return (
      <Map
        google={google}
        zoom={4}
        initialCenter={{ lat: 4.6560716, lng: -74.0595918 }}
      >
        {locations.map(({ venueLat, venueLon, venueName }) => (
          <Marker          
          key={venueName}
          name={venueName}
          lat={venueLat}
          lon={venueLon}
          position={{ lat: venueLat, lng: venueLon }} 
          onClick={this.onMarkerClick}
          />
        ))}
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}>
            <div>
              <h2>{selectedPlace.name}</h2>
              <h3>{selectedPlace.lat}</h3>
              <h3>{selectedPlace.lon}</h3>
            </div>
        </InfoWindow>
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);

```

### Enviar solución de reto
Debes de crear un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Contribuir
Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [escuelajs-reto-06](https://github.com/platzi/escuelajs-reto-06/)

### Licencia
escuelajs-reto-06 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
