import React, { useState, useEffect } from 'react';
import Header from '../components/simple/header';
import CardList from '../components/cardlist/cardlist';
import ErrorBoundry from '../components/simple/error-boundry';
import Scroll from '../components/simple/scroll';


import './App.css';

const App = () => {
  const serverIP = '192.168.1.2'
  const [searchfield, setSearchfield] = useState('')
  const [relics, setRelics] = useState([])
  const [userid, ] = useState('David')
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  // const mobile = windowSize.width < 768
  const tablet = windowSize.width < 1024

  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
  })

  useEffect(() => {
    onGetRelics()
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  // Get all relic data
  const onGetRelics = async () => {
    await fetch(`http://${serverIP}:3001/relics/all/${userid}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => setRelics(data))
    .then(console.log('Initialized'))
  }

  // Filters relic list by searchfield
  const filteredRelics = relics.filter(relic => {
    let nameMatch = relic.name.toLowerCase().includes(searchfield.toLowerCase());
    let itemMatch = false
    for (let i = 0; i < 6; i++) {
      if (relic.drops[i].toLowerCase().includes(searchfield.toLowerCase())) {
        itemMatch = true
      }
    }
    return nameMatch || itemMatch;
  });
  
  // Show cards with regard to searchfield
  return (
    <div className="app-container">
      <Header onSearchChange={onSearchChange} />
      <Scroll height={windowSize.height} tablet={tablet}>
        <ErrorBoundry>
          <CardList userid={userid} relics={filteredRelics} serverIP={serverIP} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
  
}

export default App;
