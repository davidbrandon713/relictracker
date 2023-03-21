import React from 'react'
import SearchBox from './searchbox'

import './simple.css'

const Header = ({ searchChange }) => {
  
  return (
    <div className='header-container'>
      <h1 className='header'>Relic Tracker</h1>
      <SearchBox searchChange={searchChange} />
    </div>
  )
}

export default Header;