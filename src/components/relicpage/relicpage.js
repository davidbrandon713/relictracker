import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import RelicPageItem from '../relicpage-drop/relicpage-drop'

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
      console.log(`Cleared session for ${relic.name} => [${sessionDrops}]`)
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
            <RelicPageItem 
              relic={relic}
              className='dropRare' 
              rmvDrop={rmvDrop} 
              addDrop={addDrop} 
              i={0} 
            />
            <RelicPageItem 
              relic={relic}
              className='dropUncommon' 
              rmvDrop={rmvDrop} 
              addDrop={addDrop} i={1} 
            />
            <RelicPageItem 
              relic={relic}
              className='dropUncommon' 
              rmvDrop={rmvDrop} 
              addDrop={addDrop} i={2} 
            />
            <RelicPageItem 
              relic={relic}
              className='dropCommon' 
              rmvDrop={rmvDrop} 
              addDrop={addDrop} i={3} 
            />
            <RelicPageItem 
              relic={relic}
              className='dropCommon' 
              rmvDrop={rmvDrop} 
              addDrop={addDrop} i={4} 
            />
            <RelicPageItem 
              relic={relic}
              className='dropCommon' 
              rmvDrop={rmvDrop} 
              addDrop={addDrop} i={5} 
            />
          </div>

          <div className='midContainer'>
            <div>
              <button 
                onClick={saveSession}
              >
                  Save
              </button>
              <button 
                onClick={toggleEditMode} 
                style={{
                  border: editMode && '1px solid red', 
                  color: editMode && 'red' 
                }}
              >
                Edit
              </button>
              <button 
                onClick={newSession}
              >
                Revert
              </button>
            </div>
            <div>
              <h5>Session</h5>
              <h5>Total</h5>
              <h5>Percent</h5>
            </div>
          </div>

          <div className='botContainer'>
            <div className='dataWindow'>
              { 
              relic.drops && relic.drops.map((drop, index) => 
              <h5 key={`${drop}-${index}-drop`}>
                {drop}
              </h5> 
              )}
            </div>
            <div className='calcWindow'>
              <div>
                { 
                sessionDrops.map((data, index) => 
                <h5 key={`${inventory.id}-${index}-session`}>
                  {data}
                </h5> 
                )}
              </div>
              <div>
                { 
                inventory.data && inventory.data.map((item, index) => 
                <h5 key={`${inventory.id}-${index}-total`}>
                  {item + sessionDrops[index]}
                </h5> 
                )}
              </div>
              <div>
                { 
                inventory.data && inventory.data.map((item, index) => 
                <h5 key={`${inventory.id}-${index}-percent`}>
                  {calcPercent(item + sessionDrops[index])}%
                </h5> 
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default RelicPage;