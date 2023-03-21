import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'

import './relicpage.css'

const RelicPage = ( props ) => {
  const initialState = [0, 0, 0, 0, 0, 0]
  const [sessionDrops, setSessionDrops] = useState(initialState)
  const [editMode, setEditMode] = useState(false)
  const { relic, inventory, saveInventory, trigger, setTrigger } = props

  useEffect(() => {
    newSession()
  }, [relic])

  useEffect(() => {
    console.log('Edit mode:', editMode)
  }, [editMode])

  const calcPercent = (drop) => {
    const totalDropCount = inventory.data.reduce((sum, num) => sum += num) + 
      sessionDrops.reduce((sum, num) => sum += num)
    return (drop !== 0 ? ((drop / totalDropCount) * 100).toFixed(2) : 0)
  }

  const addDrop = (i) => {
    const updatedDrops = [...sessionDrops]
    updatedDrops[i] += 1
    setSessionDrops(updatedDrops)
  }

  const rmvDrop = (i) => {
    if (editMode || sessionDrops[i] > 0) {
      const updatedDrops = [...sessionDrops]
      updatedDrops[i] -= 1
      setSessionDrops(updatedDrops)
    }
  }
  
  const saveSession = () => {
    if (!sessionDrops.every(item => item === 0)) {
      saveInventory(relic, sessionDrops)
      console.log(`Saved ${relic.name} data`)
      newSession()
    }
  }

  const saveAndClose = () => {
    saveSession()
    setEditMode(false)
    setTrigger(false)
  }

  const newSession = () => {
    if (!sessionDrops.every(item => item === 0)) {
      setSessionDrops(initialState)
      console.log('New session', relic.name)
    }
  }

  const toggleEditMode = () => {
    setEditMode(prevState => !prevState)
  }

  return (trigger) && (
    <Draggable bounds="html" handle=".dragBar" >
      <div className='window'>
        <div className='windowInner'>
          <div className='dragBar'>
            <h1 className='relicTitle'>{relic.name} Relic</h1>
          </div>
          <button className='closeBtn' onClick={saveAndClose}>Close</button>

          <div className='topContainer'>
            <div className='dropRare'>
              <button className='btnMinus' onClick={() => rmvDrop(0)}>-</button>
              <p>{relic.drops[0]}</p>
              <button className='btnPlus' onClick={() => addDrop(0)}>+</button>
            </div>
            
            <div className='dropUncommon'>
              <button className='btnMinus' onClick={() => rmvDrop(1)}>-</button>
              <p>{relic.drops[1]}</p>
              <button className='btnPlus' onClick={() => addDrop(1)}>+</button>
            </div>

            <div className='dropUncommon'>
              <button className='btnMinus' onClick={() => rmvDrop(2)}>-</button>
              <p>{relic.drops[2]}</p>
              <button className='btnPlus' onClick={() => addDrop(2)}>+</button>
            </div>

            <div className='dropCommon'>
              <button className='btnMinus' onClick={() => rmvDrop(3)}>-</button>
              <p>{relic.drops[3]}</p>
              <button className='btnPlus' onClick={() => addDrop(3)}>+</button>
            </div>

            <div className='dropCommon'>
              <button className='btnMinus' onClick={() => rmvDrop(4)}>-</button>
              <p>{relic.drops[4]}</p>
              <button className='btnPlus' onClick={() => addDrop(4)}>+</button>
            </div>

            <div className='dropCommon'>
              <button className='btnMinus' onClick={() => rmvDrop(5)}>-</button>
              <p>{relic.drops[5]}</p>
              <button className='btnPlus' onClick={() => addDrop(5)}>+</button>
            </div>
          </div>

          <div className='midContainer'>
            <div>
              <button onClick={saveSession}>Save</button>
              <button 
              onClick={toggleEditMode}
              style={{border: editMode && '1px solid red', color: editMode && 'red' }}
              >
                Edit
              </button>
              <button onClick={newSession}>Revert</button>
            </div>
            <div>
              <h5>Session</h5>
              <h5>Total</h5>
              <h5>Percent</h5>
            </div>
          </div>

          <div className='botContainer'>
            <div className='dataWindow'>
              { relic.drops && relic.drops.map((drop, index) => <h5 key={`${drop}-${index}-drop`}>{drop}</h5> )}
            </div>
            <div className='calcWindow'>
              <div>
                { sessionDrops.map((data, index) => <h5 key={`${inventory.id}-${index}-session`}>{data}</h5> )}
              </div>
              <div>
                { inventory.data && inventory.data.map((item, index) => <h5 key={`${inventory.id}-${index}-total`}>{item + sessionDrops[index]}</h5> )}
              </div>
              <div>
                { inventory.data && inventory.data.map((item, index) => <h5 key={`${inventory.id}-${index}-percent`}>{calcPercent(item + sessionDrops[index])}%</h5> )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Draggable>
  )
}

export default RelicPage;