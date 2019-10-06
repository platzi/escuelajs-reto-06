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
    return (
      <div>
        <button className='boton' type='button' onClick={this.toggleMap}>
          Contactenos
        </button>
      </div>
    )
  }
}

export default Button
