import React from 'react';

const Scroll = (props) => {
    return (
        <div id='scroll' style={{
          margin: '0px 100px', 
          padding: '4px', 
          overflowY: 'scroll', 
          border: '3px solid black',
          borderRadius: '12px',
          height: props.height - 200
          }}>
            {props.children}
        </div>
    );
};

export default Scroll;