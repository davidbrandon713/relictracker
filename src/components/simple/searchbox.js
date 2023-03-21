import React from 'react'

import './simple.css'

const SearchBox = ({ searchChange }) => {
  return (
    <div className='searchbox-container'>
      <input
        className='searchbox'
        aria-label='Search Relics'
        type='search'
        placeholder='Search relics'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;