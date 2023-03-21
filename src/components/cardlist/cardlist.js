import React, { useState } from 'react'
import ErrorBoundry from '../simple/error-boundry'
import RelicPage from '../relicpage/relicpage'
import Card from '../card/card'

import '../card/card.css'

const CardList = ( props ) => {
  const [selectedRelic, setSelectedRelic] = useState('None')
  const [inventory, setInventory] = useState( {id: 'mesoN5', data: [0, 0, 0, 0, 0, 0] })
  const [popupTrigger, setPopupTrigger] = useState(false)
  const { userid, relics } = props

  const setRelic = async ( relic ) => {
    if (selectedRelic !== relic) {
      // Retrieve user data for this relic
      const onGetRelicInventory = async (relic) => {
        await fetch(`http://localhost:3001/users/${userid}/${relic.id}`, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => setInventory(data))
        .then(setSelectedRelic(relic))
      }
      await onGetRelicInventory(relic)
    }
    setPopupTrigger(true)
  }

  // Save session drops to user document
  const saveInventory = async (relic, sessionDrops) => {
    await fetch(`http://localhost:3001/users/${userid}/update/${relic.id}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({sessionDrops}),
    })
    .then(response => response.json())
    .then(data => setInventory(data))
  }

  // const onGetInventory = async () => {
  //   await fetch(`http://localhost:3001/users/${userid}`, {
  //     method: 'GET',
  //   })
  //   .then(response => response.json())
  //   .then(data => setInventory(data.inventory))
  //   .then(console.log(inventory))
  // }

  return (
    <>
      <ErrorBoundry>
        {relics.length ?
        (
          <div className='cardlist-container'>
            {
              relics.map(relic => {
                return (
                  <Card 
                    key={relic.name} 
                    name={relic.name} 
                    drops={relic.drops} 
                    clickEvent={() => setRelic(relic)} 
                  />
                )
              })
            }
          </div>
        ) :
        (<h3 style={{color: 'rgb(199, 209, 214)'}}>No relics match search criteria.</h3>)}
      
      </ErrorBoundry>
      <ErrorBoundry>
        <RelicPage 
          relic={selectedRelic}
          inventory={inventory}
          saveInventory={saveInventory}
          trigger={popupTrigger}
          setTrigger={setPopupTrigger}
        />
      </ErrorBoundry>
    </>
  )
}

export default CardList;