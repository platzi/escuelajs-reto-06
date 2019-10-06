import React from 'react';
import '../styles/containers/App.styl';
import MapContainer from './MapContainer';
import ButtonShowMap from './ButtonShowMap';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends React.Component {
  constructor(props){
    super(props)
    this.state=({show:false});
    this.handleClick = () => {
      if(this.state.show ===true){
        this.setState({
          show:false
        })
      }else{
        this.setState({
          show:true
        })
      }
      
    }
  }

  render() {
    return (
      <div className="App">
        
        {this.state.show && (
          <MapContainer />
        ) }
        <ButtonShowMap
          state={this.state.show}
          className="btn"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Layout;
