import React, { useState, useReducer } from 'react';
import Draggable from 'react-draggable';
import './RelicPage.css';

const RelicPage = ( props ) => {
  const initialState = [0, 0, 0, 0, 0, 0];
  const [sessionDrops, setSessionDrops] = useState(initialState);
  
  // Use this to force render the popup page upon button press
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const handleClick = () => {
    forceUpdate();
  }

  let totalDrops = props.inventory.data.map(x => x);
  let totalDropCount = 0;
  for (let i = 0; i < 6; i++) {
    totalDrops[i] += sessionDrops[i];     // *** SOMEHOW SEND totalDrops[] ARRAY BACK TO REPLACE DATA IN relicInventory[] ARRAY
    totalDropCount += totalDrops[i];
  }

  const calcPercent = (num) => {
    return ((num / totalDropCount) * 100).toFixed(2);
  }

  const addDrop = (i) => {
    let temp = sessionDrops;
    temp[i] += 1;
    setSessionDrops(temp);
    handleClick();
  }

  const rmvDrop = (i) => {
    if (sessionDrops[i] > 0) {
      let temp = sessionDrops;
      temp[i] -= 1;
      setSessionDrops(temp);
      handleClick();
    }
  }

  const saveSession = () => {               // Add current session drops to inventory array of active relic
    let tempArray = props.inventory;
    for (let i = 0; i < 6; i++) {
      tempArray.data[i] += sessionDrops[i];
    }
    console.log(`Saved: ${tempArray.name}: ${tempArray.data}`);
    props.setInventory(tempArray);
    // setSessionDrops(initialState);
    // props.save();
    newSession();
  }
  

  const newSession = () => {
    setSessionDrops(initialState);
  }

  return (props.trigger) ? (
    <Draggable bounds="html" handle=".handle" >
      <div className='window'>
        <div className='windowInner'>
          <div className='handle' id='dragBar'>
            <h1 className='relicTitle'>{props.relic.name}</h1>
          </div>
          <button className='closeBtn' onClick={() => props.setTrigger(false)}>Close</button>
          <div className='dropListWindow'>
            
            <h4 className='dropRare'>
              <button className='btnMinus' onClick={() => rmvDrop(0)}>-</button>
                <p>{props.relic.drops[0]}</p>
              <button className='btnPlus' onClick={() => addDrop(0)}>+</button>
            </h4>
            
            <h4 className='dropUncommon'>
              <button className='btnMinus' onClick={() => rmvDrop(1)}>-</button>
                <p>{props.relic.drops[1]}</p>
              <button className='btnPlus' onClick={() => addDrop(1)}>+</button>
            </h4>

            <h4 className='dropUncommon'>
              <button className='btnMinus' onClick={() => rmvDrop(2)}>-</button>
                <p>{props.relic.drops[2]}</p>
              <button className='btnPlus' onClick={() => addDrop(2)}>+</button>
            </h4>

            <h4 className='dropCommon'>
              <button className='btnMinus' onClick={() => rmvDrop(3)}>-</button>
                <p>{props.relic.drops[3]}</p>
              <button className='btnPlus' onClick={() => addDrop(3)}>+</button>
            </h4>

            <h4 className='dropCommon'>
              <button className='btnMinus' onClick={() => rmvDrop(4)}>-</button>
                <p>{props.relic.drops[4]}</p>
              <button className='btnPlus' onClick={() => addDrop(4)}>+</button>
            </h4>

            <h4 className='dropCommon'>
              <button className='btnMinus' onClick={() => rmvDrop(5)}>-</button>
                <p>{props.relic.drops[5]}</p>
              <button className='btnPlus' onClick={() => addDrop(5)}>+</button>
            </h4>
          </div>

          <div className='midButtons'>
            <button className='saveBtn' onClick={() => saveSession()}>Save</button>
            <button className='newBtn' onClick={() => newSession()}>New</button>
          </div>

          <div className='midLabels'>
            <h5>Session</h5>
            <h5>Total</h5>
            <h5>Percent</h5>
          </div>

          <div className='dataWindow'>
              <h5>{props.relic.drops[0]}:</h5>
              <h5>{props.relic.drops[1]}:</h5>
              <h5>{props.relic.drops[2]}:</h5>
              <h5>{props.relic.drops[3]}:</h5>
              <h5>{props.relic.drops[4]}:</h5>
              <h5>{props.relic.drops[5]}:</h5>
          </div>

          <div className='calcWindow'>
            <div>
              <h5>{sessionDrops[0]}</h5>
              <h5>{sessionDrops[1]}</h5>
              <h5>{sessionDrops[2]}</h5>
              <h5>{sessionDrops[3]}</h5>
              <h5>{sessionDrops[4]}</h5>
              <h5>{sessionDrops[5]}</h5>
            </div>
            <div>
              <h5>{totalDrops[0]}</h5>
              <h5>{totalDrops[1]}</h5>
              <h5>{totalDrops[2]}</h5>
              <h5>{totalDrops[3]}</h5>
              <h5>{totalDrops[4]}</h5>
              <h5>{totalDrops[5]}</h5>
            </div>
            <div>
              <h5>{calcPercent(totalDrops[0])}%</h5>
              <h5>{calcPercent(totalDrops[1])}%</h5>
              <h5>{calcPercent(totalDrops[2])}%</h5>
              <h5>{calcPercent(totalDrops[3])}%</h5>
              <h5>{calcPercent(totalDrops[4])}%</h5>
              <h5>{calcPercent(totalDrops[5])}%</h5>
            </div>
          </div>

          
          
        </div>
      </div>
    </Draggable>
  ) : "";
}

export default RelicPage;