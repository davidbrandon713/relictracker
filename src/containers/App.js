import React, { useState, useEffect } from 'react';
import Header from '../components/simple/header';
import CardList from '../components/cardlist/cardlist';
import ErrorBoundry from '../components/simple/error-boundry';
// import Scroll from '../components/simple/scroll';


import './App.css';

const App = () => {
  const [searchfield, setSearchfield] = useState('')
  const [relics, setRelics] = useState([])

  useEffect(() => {
    onGetRelics(setRelics)
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  // Refresh relic data
  const onGetRelics = async () => {
    await fetch('http://localhost:3001/relics', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => setRelics(data))
    .then(console.log('get all relics'))
  }

  // Filters relic list by searchfield
  const filteredRelics = relics.filter(relic => {
    const nameMatch = relic.name.toLowerCase().includes(searchfield.toLowerCase());
    const itemMatch0 = relic.drops[0].toLowerCase().includes(searchfield.toLowerCase());
    const itemMatch1 = relic.drops[1].toLowerCase().includes(searchfield.toLowerCase());
    const itemMatch2 = relic.drops[2].toLowerCase().includes(searchfield.toLowerCase());
    const itemMatch3 = relic.drops[3].toLowerCase().includes(searchfield.toLowerCase());
    const itemMatch4 = relic.drops[4].toLowerCase().includes(searchfield.toLowerCase());
    const itemMatch5 = relic.drops[5].toLowerCase().includes(searchfield.toLowerCase());
    return nameMatch || itemMatch0 || itemMatch1 || itemMatch2 || itemMatch3 || itemMatch4 || itemMatch5;
  });
  
  // Show cards with regard to searchfield
  return (
    <div className="app-container">
      <Header searchChange={onSearchChange} />
      {/* <Scroll height={window.innerHeight}> */}
      <ErrorBoundry>
        <CardList relics={filteredRelics} />
      </ErrorBoundry>
      {/* </Scroll> */}
    </div>
  );
  
}

export default App;
