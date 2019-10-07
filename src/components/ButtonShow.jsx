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