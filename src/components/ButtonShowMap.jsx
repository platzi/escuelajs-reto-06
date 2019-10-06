import React from 'react';

let text = 'ShowMap';
const ButtonShowMap = ({ onClick, state }) => {
  if(!state){
    text = 'ShowMap'
  }else{
    text = 'HideMap';
  }
  return(
    <button className="btn" type="button" onClick={onClick}>
      {text}
    </button>
  )
}
export default ButtonShowMap;
