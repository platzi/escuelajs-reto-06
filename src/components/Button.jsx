import React from 'react'

class Button extends React.Component {
  state = {
    show: false
  }

  toggleMap = () =>{
    const {show} = this.state    
    this.setState({
      show: !show
    })
    (show ?document.getElementsByTagName("section")[0].style.display = "none":document.getElementsByTagName("section")[0].style.display = "block")
  }

  render() {
    const {show} = this.state
    return (
      <div>
        <h1>Nunca Pares de Aprender</h1>
        <h2>Instalaciones de Platzi</h2>
        <button className='boton' type='button' onClick={this.toggleMap}>
          {show?"Ocultar Mapa":"Mostrar Mapa"}
        </button>
      </div>
    )
  }
}

export default Button
