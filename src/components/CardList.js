import React, { useState } from 'react';
import ErrorBoundry from './ErrorBoundry';
import RelicPage from './RelicPage';
import Card from './Card';



const CardList = ({ relics }) => {
  const initialState = {
    name: 'Neo K3 Relic',
    data: [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  }
  const [selectedRelic, setSelectedRelic] = useState('None');
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [inventory, setInventory] = useState(initialState);

  let relicInventory = [
    {
      name: 'Neo S13 Relic',
      data: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      name: 'Neo K3 Relic',
      data: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      name: 'Axi A7 Relic',
      data: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ]
  
  const setRelic = ({ relic }) => {
    setSelectedRelic({...relic});
    setInventory(...relicInventory.filter(item => item.name.indexOf(relic.name) > -1));
    setPopupTrigger(true);
    console.log(`Selected relic: ${relic.name}`);
  }

  const save = () => {
    const tempData = inventory;
    const tempArray = relicInventory.filter(item => !item.name.indexOf(inventory.name) > -1);
    relicInventory = [];
    relicInventory.push(tempArray);
    relicInventory.push(tempData);
    console.log(relicInventory);
  }

  return !relics.length ?
    <ErrorBoundry>
      <h3 style={{color: 'lightblue'}}>No relics match search criteria.</h3>
      <RelicPage 
        relic={selectedRelic}
        inventory={inventory} 
        setInventory={setInventory}
        relicInventory={relicInventory}
        save={() => save({selectedRelic})}
        trigger={popupTrigger}
        setTrigger={setPopupTrigger}
      />
    </ErrorBoundry> :
  (
    <div>
      {
        relics.map(relic => {
          return (
            <Card 
              key={relic.name} 
              name={relic.name} 
              drops={relic.drops} 
              clickEvent={() => setRelic({relic})} 
            />
          )
        })
      }
      <ErrorBoundry>
        <RelicPage 
          relic={selectedRelic}
          inventory={inventory} 
          setInventory={setInventory}
          relicInventory={relicInventory}
          save={() => save({selectedRelic})}
          trigger={popupTrigger}
          setTrigger={setPopupTrigger}
        />
      </ErrorBoundry>
    </div>
  );
}

export default CardList;