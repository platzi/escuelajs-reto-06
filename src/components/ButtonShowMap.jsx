import React, { Component } from 'react';

class ButtonShowMap extends Component {
    state = {
        show: false,
    }
    handleClick = () => {
        this.setState({
            show: true,
        })
    }
    render() {
        return (
            <button type="button" onClick="{this.handleClick}">
                Mostrar Mapa
            </button>    
        )
    }
}

export default ButtonShowMap;