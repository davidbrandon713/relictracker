import React, { useState } from 'react';
import ErrorBoundry from './ErrorBoundry';
import RelicPage from './RelicPage';
import Card from './Card';



const CardList = ({ relics }) => {
  const [selectedRelic, setSelectedRelic] = useState('');
  const [popupTrigger, setPopupTrigger] = useState(false);
  
  const setRelic = ({ relic }) => {
    setSelectedRelic({...relic});
    console.log(`Selected relic: ${relic.name}`);
    setPopupTrigger(true);
  }

  return !relics.length ?
  <h3>No relics match search criteria.</h3> :
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
          trigger={popupTrigger}
          setTrigger={setPopupTrigger}
        />
      </ErrorBoundry>
    </div>
  );
}

export default CardList;