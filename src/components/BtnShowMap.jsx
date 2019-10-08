import React from 'react';

const BtnShowMap = ({ text, ...props }) => (
  <input type='button' value={text} className='btn-showMap' {...props} />
);

export default BtnShowMap;
