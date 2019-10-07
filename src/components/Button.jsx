import React, { Component } from 'react';

class Button extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      isShown: false
    }
  } */

  render() {
    /* const { isShown } = this.state; */
    return (
      <button type='button' onClick={this.handleShowMap}>Mostrar Mapa</button>
    );
  }
}
export default Button;
