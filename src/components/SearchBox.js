import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='ma2'>
      <input
        aria-label='Search Relics'
        className='pa2 ba b--blue bg-lightest-blue'
        type='search'
        placeholder='Search relics'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;