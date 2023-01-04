import React from 'react';
import './RelicPage.css'

const RelicPage = (props) => {
  console.log(`RelicPage load: ${props.relic.name}`)
  return (props.trigger) ? (
    <div className='window'>
      <div className='windowInner'>
        <button className='closeBtn' onClick={() => props.setTrigger(false)}>Close</button>
        <h3>{props.relic.name}</h3>
        <div className='dropListWindow'>
          
          <h4 id='dropRare' className='dropRare'>
            <button id='btnRareMinus' className='btnMinus'>-</button>
              <p>{props.relic.drops[0]}</p>
            <button id='btnRarePlus' className='btnPlus'>+</button>
          </h4>
          
          <h4 id='dropUncommon1' className='dropUncommon'>
            <button id='btnUnc1Minus' className='btnMinus'>-</button>
              <p>{props.relic.drops[1]}</p>
            <button id='btnUnc1Plus' className='btnPlus'>+</button>
          </h4>

          <h4 id='dropUncommon2' className='dropUncommon'>
            <button id='btnUnc2Minus' className='btnMinus'>-</button>
              <p>{props.relic.drops[2]}</p>
            <button id='btnUnc2Plus' className='btnPlus'>+</button>
          </h4>

          <h4 id='dropCommon1' className='dropCommon'>
            <button id='btnCom1Minus' className='btnMinus'>-</button>
              <p>{props.relic.drops[3]}</p>
            <button id='btnCom1Plus' className='btnPlus'>+</button>
          </h4>

          <h4 id='dropCommon2' className='dropCommon'>
            <button id='btnCom2Minus' className='btnMinus'>-</button>
              <p>{props.relic.drops[4]}</p>
            <button id='btnCom2Plus' className='btnPlus'>+</button>
          </h4>

          <h4 id='dropCommon3' className='dropCommon'>
            <button id='btnCom3Minus' className='btnMinus'>-</button>
              <p>{props.relic.drops[5]}</p>
            <button id='btnCom3Plus' className='btnPlus'>+</button>
          </h4>
        </div>
        
        <div className='dataWindow'>
          <h5>{props.relic.drops[0]}</h5>
          <h5>{props.relic.drops[1]}</h5>
          <h5>{props.relic.drops[2]}</h5>
          <h5>{props.relic.drops[3]}</h5>
          <h5>{props.relic.drops[4]}</h5>
          <h5>{props.relic.drops[5]}</h5>
        </div>
      </div>
    </div>
  ) : "";
}

export default RelicPage;