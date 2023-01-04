import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='ma2'>
      <input
        aria-label='Search Relics'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search relics'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;