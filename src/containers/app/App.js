import React, { useState, useEffect } from 'react'
import Header from '../../components/simple/header'
import CardList from '../../components/cardlist'
import Scroll from '../../components/simple/scroll'

import '../../index.css'

const App = () => {
  const userid = 'Default'
  const [searchfield, setSearchfield] = useState('')
  const [relics, setRelics] = useState([])
  const [iconSize, setIconSize] = useState('small')

  useEffect(() => {
    onGetRelics()
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  // Get all relic data
  const onGetRelics = async () => {
    await fetch(`http://localhost:8080/relics/all/${userid}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setRelics(data))
      .then(console.log('Initialized'))
  }

  // Create new relic and user data
  const onCreateRelic = async (id, name, drops) => {
    await fetch(`http://localhost:8080/relics/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        name,
        drops,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(
        await fetch(`http://localhost:8080/users/${userid}/createrelic/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
      )
  }

  // Filters relic list by searchfield
  const filteredRelics = relics.filter((relic) => {
    let nameMatch = relic.name.toLowerCase().includes(searchfield.toLowerCase())
    let itemMatch = false
    for (let i = 0; i < 6; i++) {
      if (relic.drops[i].toLowerCase().includes(searchfield.toLowerCase())) {
        itemMatch = true
      }
    }
    return nameMatch || itemMatch
  })

  // Show cards with regard to searchfield
  return (
    <div className="app-container">
      <Header
        onSearchChange={onSearchChange}
        onCreateRelic={onCreateRelic}
        iconSize={iconSize}
        setIconSize={setIconSize}
      />
      <Scroll>
        <CardList
          userid={userid}
          relics={filteredRelics}
          iconSize={iconSize}
        />
      </Scroll>
    </div>
  )
}

export default App
