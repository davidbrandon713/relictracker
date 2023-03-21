import React from 'react'

import './simple.css'

const TextBox = ({ onSearchChange }) => {
  return (
    <div className='textbox-container'>
      <input
        className='textbox'
        aria-label='Search relics'
        type='search'
        placeholder='Search relics'
        onChange={onSearchChange}
      />
    </div>
  );
}

export default TextBox;