import React, { Component } from 'react';
import MyMap from './Map';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      textButton: 'Ver mapa'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { show } = this.state;
    if(show) {
      this.setState({show: false, textButton: 'Ver mapa'})
    } else {
      this.setState({show: true, textButton: 'Ocultar mapa'})
    }
  }

  render() {
    const { show, textButton } = this.state;
    return (
      <>
        <button type="button" className="btn btn-material" onClick={this.handleClick}>
          {textButton}
        </button>
        {
          (show) ? (
            <MyMap />
          ) : (
            <div className="upps">Upps Algo Has Ocultado Algo Muy Importante</div>
          )
        } 
      </>
    );
  }
}

export default MapContainer;