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

Creamos un componente de clase llamado MapContainer que contiene la lógica para presentar un mapa que muestra las oficinas de Platzi según la información de la FakeApi.

Adicionalmente dentro de este componente estamos invocando al componente 'ButtonShow' el cual se encarga de mostrar u ocultar el mapa.

En las ubicaciones presentadas, estamos haciendo uso de 'InfoWindow' que responde al evento del click del marker para mostrar el nombre de la oficina.

```javascript
import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import ButtonShow from './ButtonShow';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.google = props.google;
    this.state = { 
      show: false,
      showInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    this.handleShowChange = this.handleShowChange.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(propsMarker, marker) {
    this.setState({
      selectedPlace: propsMarker,
      activeMarker: marker,
      showInfoWindow: true,
    });
  }
  
  handleShowChange(value) {
    this.setState({ show: value });
  }

  render() {
    const { show, activeMarker,showInfoWindow, selectedPlace } = this.state;
    return (
      <>
        <ButtonShow show={show} onShowChange={this.handleShowChange} />
        {show && (
          <Map
            google={this.google}
            zoom={4}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          >
            {this.props.locations.map(item => {
              return (
                <Marker
                  key={item.venueName}
                  title={item.venueName}
                  name={item.venueName}
                  position={{ lat: item.venueLat, lng: item.venueLon }}
                  onClick={this.onMarkerClick}
                />
              );
            })}
            <InfoWindow marker={activeMarker} visible={showInfoWindow}>
              <div><h3>{selectedPlace.name}</h3></div>
            </InfoWindow>
          </Map>
        )}
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
```

Utilizamos GoogleApiWrapper que es un HOC (Higher-Order component) acepta un objeto que contiene el apiKey.

```javascript
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
```

Creamos el componente de clase 'ButtonShow' en el cual hacemos uso del levantamiendo de estado, para modificar el estado del componente 'MapContainer' por medio del evento de onClick el cual invoca al hanlde 'handleShowChange' del componente 'MapContainer' que le llega en los props al componente ButtonShow

```javascript
import React from 'react';
import '../styles/components/ButtonShow.styl';

class ButtonShow extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onShowChange(!this.props.show);
  }

  render() {
    const labelButton = this.props.show? 'Ocultar' : 'Mostrar';

    return (
      <button type="button" className="button-show" onClick={this.handleClick}>
        {labelButton}
      </button>
    );
  }
}

export default ButtonShow;
```

En el componente 'App' hacemos el llamado de la FakeApi por medio de fetch

```javascript
import React, { useState, useEffect } from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  const [points, setPoints] = useState([]);
  const API = 'http://localhost:3000/locations';
  
  useEffect(() => { 
    fetch(API)
    .then(response => response.json())
    .then(data => setPoints(data))
    .catch(error => {throw new Error(error)});
  }, []);

  return (
    <div className="App">
      <MapContainer locations={points} />
    </div>
  )
};

export default App;
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

### Tercer Problema

Ahora utiliza la API propuesta

Para ejecutar la Fake API debes de correr el siguiente comando:

```bash
npm run server
```

1) Inicia y analiza el funcionamiento de la FAKE API de 'locations'
2) Haz un llamado a la API desde el proyecto por medio de fetch
3) Por medio de 'props' pasa al componente 'MapContainer.jsx' el resultado de la consulta a la FAKE API.
4) Itera por cada una de las ubicaciones que tiene Platzi y muéstralas en el Mapa.

### Cuarto Problema (Opcional)

Ahora que tenemos nuestra aplicación Funcionando, utiliza la documentación del paquete instalado para aprender e implementar un 'InfoWindow' por cada ubicación de Platzi

1) Leer la documentación de '[google-maps-react](https://www.npmjs.com/package/google-maps-react)' para implementar 'InfoWindow'
2) Implementa un 'InfoWindow' por cada ubicación debes de utilizar la información de la FAKE API.
3) Muestra el nombre de la oficina de Platzi al dar clic en el Maker.


### Enviar solución de reto
Debes de crear un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Contribuir
Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [escuelajs-reto-06](https://github.com/platzi/escuelajs-reto-06/)

### Licencia
escuelajs-reto-06 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
