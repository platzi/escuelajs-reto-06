# Escuelajs-reto-06
Reto 6 Octubre 5: Curso Práctico de React JS

## Platzi Maps

Tenemos un proyecto web, donde se trabaja con la API de Google de mapas. El mapa muestra las ubicaciones de las oficinas de Platzi.

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
import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
```
Creamos un componente llamado MapContainer donde vamos a crear la lógica para crear un nuevo mapa.

```javascript
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  toogleButton = () => {
    this.setState({
      show: !this.state.show
    })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const {locations} = this.props;
    const {show} = this.state;
    return(
      <div>
        <button type="button" onClick={this.toogleButton}>{show ? 'Ocultar mapa' : 'Ver mapa' }</button>
        {show &&
          <Map
          google={this.props.google}
          zoom={5}
          initialCenter={{ lat: 11.8901835, lng: -84.0547899 }}
          onClick={this.onMapClicked}
          >
            {locations.map(item => 
              <Marker
              onClick={this.onMarkerClick}
              name={item.venueName}
              position={{ lat: item.venueLat, lng: item.venueLon }}
              />
            )}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        }
      </div>
    )
  }
}
```

Utilizamos GoogleApiWrapper que es un HOC (Higher-Order component) acepta un objeto que contiene el apiKey.

```javascript
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
```

### Contribuir
Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [escuelajs-reto-06](https://github.com/platzi/escuelajs-reto-06/)

### Licencia
escuelajs-reto-06 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
