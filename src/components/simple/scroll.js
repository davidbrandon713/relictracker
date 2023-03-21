import React from 'react';

import './simple.css'

const Scroll = (props) => {
  return (
      <div className='scroll-container' style={{
        height: props.tablet ? props.height - 94 : props.height - 130
        }}>
          {props.children}
      </div>
  );
};

export default Scroll;