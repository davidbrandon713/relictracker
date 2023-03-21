import React from 'react';

import './simple.css'

const Scroll = (props) => {
  return (
      <div className='scroll-container' style={{
        height: props.height - 150,
        }}>
          {props.children}
      </div>
  );
};

export default Scroll;