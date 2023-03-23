import React, { useState, useEffect } from 'react';
import Header from '../../components/simple/header';
import CardList from '../../components/cardlist/cardlist';
import ErrorBoundry from '../../components/simple/error-boundry';

import './App.css';

const App = () => {
  const serverIP = 'localhost'
  const [searchfield, setSearchfield] = useState('')
  const [relics, setRelics] = useState([])
  const [userid, ] = useState('David')

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

  // Create new relic and user data
  const onCreateRelic = async (id, name, drops) => {
    await fetch(`http://${serverIP}:3001/relics/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        id,
        name,
        drops
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(
      await fetch(`http://${serverIP}:3001/users/${userid}/createrelic`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: {
          id
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .then(onGetRelics())
    )
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
      <ErrorBoundry>
        <CardList userid={userid} relics={filteredRelics} serverIP={serverIP} />
      </ErrorBoundry>
    </div>
  );
  
}

export default App;
