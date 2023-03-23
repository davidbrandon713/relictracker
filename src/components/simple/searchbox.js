import React from 'react'

import './simple.css'

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className='searchbox-container'>
      <input
        className='searchbox'
        aria-label='Search relics'
        type='search'
        placeholder='Search relics'
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;