import React from 'react'
import TextBox from './textbox'

import './simple.css'

const Header = ({ onSearchChange, serverIP, onSetServerIP }) => {
  
  return (
    <div className='header-container'>
      <h1 className='header'>Relic Tracker</h1>
      <TextBox onSearchChange={onSearchChange} serverIP={serverIP} onSetServerIP={onSetServerIP} />
    </div>
  )
}

export default Header;