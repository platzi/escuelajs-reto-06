# Google Map React Component Tutorial Dolpins
Un componente declarativo de Google Map React que utiliza React, dependencias de carga lenta, buscador de ubicación actual y un enfoque basado en pruebas por parte del equipo de Fullstack React.

## Quickstart
Primero, instala la bibliotecy:

`npm install --save google-maps-react`
## API de Google de carga lenta automática
La biblioteca incluye un ayudante para envolver la API de Google Maps. El componente (GoogleApiWrapper Higher-Order) acepta un objeto de configuración que debe incluir una apiKey. Consulte (lib / GoogleApi.js) para ver todas las opciones que acepta
```js
import {GoogleApiWrapper} from 'google-maps-react' 

export class MapContainer extends React.Component {}
 
export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)
```

Alternativamente, el componente de orden superior GoogleApiWrapper se puede configurar pasando una función que se llamará con los accesorios del componente cuando se envuelva y se debe devolver el objeto de configuración
```js
export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey,
    language: props.language,
  }
))(MapContainer)
```
Si desea agregar un contenedor de carga que no sea el contenedor de carga predeterminado, simplemente páselo en el HOC, así:
```js
const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
) 
export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE),
  LoadingContainer: LoadingContainer
})(MapContainer)
```
## Ejemplo de uso con la API de Google de carga lenta:
```js
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)
```


Examples
Check out the example site at: http://fullstackreact.github.io/google-maps-react

## Accesorios de mapas adicionales
El componente Mapa toma una serie de accesorios opcionales.
Zoom: (se muestra arriba) toma un número con el valor más alto que representa un enfoque más ajustado en el centro del mapa.

Estilo: toma un objeto de estilo CSS, generalmente ancho y alto..
```js
const style = {
  width: '100%',
  height: '100%'
}
```
initalCenter: toma un objeto que contiene coordenadas de latitud y longitud. Establece el centro de mapas al cargar.
```js
    <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
```
center:toma un objeto que contiene coordenadas de latitud y longitud. Use esto si desea volver a representar el mapa después del procesamiento inicial.
```js
    <Map
          google={this.props.google}
          style={style}
          center={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
```
bounds:Toma un objeto google.maps.LatLngBounds() para ajustar el centro y el zoom del mapa.
```js
var points = [
    { lat: 42.02, lng: -77.01 },
    { lat: 42.03, lng: -77.02 },
    { lat: 41.03, lng: -77.04 },
    { lat: 42.05, lng: -77.02 }
]
var bounds = new this.props.google.maps.LatLngBounds();
for (var i = 0; i < points.length; i++) {
  bounds.extend(points[i]);
}
return (
    <Map
        google={this.props.google}
        initialCenter={{
            lat: 42.39,
            lng: -72.52
        }}
        bounds={bounds}>
    </Map>
);
``` 
También requiere controladores de eventos que se describen a continuación:

### Events
El componente <Map /> maneja los eventos fuera de la caja. Todos los controladores de eventos son opcionales.

### onReady
Cuando la instancia de <Map /> se ha cargado y está lista en la página, llamará al accesorio onReady, si se proporciona. El accesorio onReady es útil para buscar lugares o usar la API de autocompletar para lugares.
```js
fetchPlaces(mapProps, map) {
  const {google} = mapProps;
  const service = new google.maps.places.PlacesService(map);
  // ...
} 
render() {
  return (
    <Map google={this.props.google}
      onReady={this.fetchPlaces}
      visible={false}>
        <Listing places={this.state.places} />
    </Map>
  )
}
```
### onClick
Para escuchar los clics en el componente <Map /> pase el accesorio onClick:
```js
mapClicked(mapProps, map, clickEvent) {
  // ...
} 
render() {
  return (
    <Map google={this.props.google}
      onClick={this.mapClicked} />
  )
}
```
### onDragend
Cuando nuestro usuario cambia el centro del mapa arrastrando el Mapa, podemos recibir una devolución de llamada después de que el evento se active con el accesorio onDragend:
```js
centerMoved(mapProps, map) {
  // ...
}
 
render() {
  return (
    <Map google={this.props.google}
      onDragend={this.centerMoved} />
  )
}
```
### Visibilidad
Puede controlar la visibilidad del mapa utilizando el accesorio visible. Esto es útil para situaciones en las que desea utilizar la API de Google Maps sin un mapa. El componente <Map /> se cargará como de costumbre. Ver la demostración de Google Placesmo
```js
For example:

<Map google={this.props.google}
    visible={false}>
  <Listing places={this.state.places} />
</Map>
```
## Subcomponents
La API <Map /> incluye subcomponentes destinados a ser utilizados como elementos secundarios del componente Map. Cualquier hijo puede usarse dentro del componente Mapa y recibirá los tres accesorios (como hijos):

map - la instancia de Google del map
google -  una referencia al objeto window.google
mapCenter - el objeto google.maps.LatLng () que hace referencia al centro de la instancia de mapa
Para colocar un marcador en el Map, inclúyalo como hijo del componente <Map />.
```js
<Map google={this.props.google}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}>
  <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />
  <Marker />
  <Marker
    name={'Your position'}
    position={{lat: 37.762391, lng: -122.439192}}
    icon={{
      url: "/path/to/custom_icon.png",
      anchor: new google.maps.Point(32,32),
      scaledSize: new google.maps.Size(64,64)
    }} />
</Map>
```
El componente <Marker /> acepta un accesorio de posición que define la ubicación de la posición en el mapa. Puede ser un objeto sin procesar o una instancia de google.maps.LatLng ().

Si no se pasa ninguna posición en los accesorios, el marcador pasará por defecto a la posición actual del mapa, es decir, el accesorio mapCenter.

También puedes pasar cualquier otro accesorio que quieras con el <Marker />. Se pasará de nuevo a través de eventos de marcador.

### Events
El componente <Marker /> escucha eventos, similar al componente <Map />.

### onClick
Puede escuchar un evento onClick con el accesorio onClick (con el nombre apropiado).
```js
onMarkerClick(props, marker, e) {
  // ..
}
 
render() {
  return (
    <Map google={this.props.google}>
      <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
    </Map>
  )
}
```
### mouseover
También puede pasar una devolución de llamada cuando el usuario pasa el mouse sobre una instancia de <Marker /> pasando la devolución de llamada onMouseover:
```js
onMouseoverMarker(props, marker, e) {
  // ..
} 
render() {
  return (
    <Map google={this.props.google}>
      <Marker onMouseover={this.onMouseoverMarker}
          name={'Current location'} />
    </Map>
  )
}
```
### Polygon
Para colocar un polígono en el Mapa, establezca <Polygon />  como elemento secundario del componente Mapa
```js
render() {
  const triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}
  ];
 
  return(
    <Map google={this.props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={14}>
        <Polygon
          paths={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35} />
    </Map>
  )
}
```
### Events
El componente <Polygon /> escucha los eventos onClick, onMouseover y onMouseout

### Polyline
Para colocar una polilínea en el Mapa, establezca <Polyline /> como elemento secundario del componente Mapa..
```js
render() {
  const triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}
  ];
 
  return(
    <Map google={this.props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={14}>
        <Polyline
          paths={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2} />
    </Map>
  )
}
```
### Events
El componente <Polyline /> escucha los eventos onClick, onMouseover y onMouseout.s.

### InfoWindow
El componente <InfoWindow /> incluido en esta biblioteca nos da la posibilidad de abrir una ventana de "más información" en nuestro mapa de Google


La visibilidad del componente <InfoWindow /> está controlada por un accesorio visible. El accesorio visible es un booleano (PropTypes.bool) que muestra <InfoWindow /> cuando es verdadero y lo oculta cuando es falso.

Hay dos formas de controlar una posición del componente <InfoWindow />. Puede usar un accesorio de posición o conectar el componente <InfoWindow /> directamente a un componente <Marker /> existente utilizando un accesorio de marcador.
```js
//note: code formatted for ES6 here
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
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
    return (
      <Map google={this.props.google}
          onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}
```
### Events
<InfoWindow /> arroja eventos cuando se muestra / oculta. Cada evento es opcional y puede aceptar que se llame a un controlador cuando se dispara el evento.
```js
<InfoWindow
  onOpen={this.windowHasOpened}
  onClose={this.windowHasClosed}
  visible={this.state.showingInfoWindow}>
    <div>
      <h1>{this.state.selectedPlace.name}</h1>
    </div>
</InfoWindow>
```

### onClose
El evento onClose se desencadena cuando <InfoWindow /> se ha cerrado. Es útil para cambiar el estado en el componente principal para realizar un seguimiento del estado de <InfoWindow />.

### onOpen
El evento onOpen se activa cuando la ventana se ha montado en la instancia del mapa de Google. Es útil para realizar un seguimiento del estado de <InfoWindow /> desde el componente principal.

GoogleApiWrapper pasa automáticamente la instancia de Google cargada cuando se monta el componente (y solo la carga una vez).

Carga manual de la API de Google
Si prefiere no usar la opción de carga automática, también puede pasar la instancia de window.google como accesorio a su componente <Map />

<Map google={window.google} />
Issues?

https://translate.google.com.co/translate?hl=es&tab=wT&sl=auto&tl=es&u=https%3A%2F%2Fwww.fullstackreact.com%2Farticles%2Fhow-to-write-a-google-maps-react-component%2F