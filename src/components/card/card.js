import React from 'react';

import './card.css'

const Card = ({ name, drops, imgSrc, clickEvent }) => {
  if (name.split(' ')[0] === 'Lith') { imgSrc = `${process.env.PUBLIC_URL}/assets/images/relicLith100x123.png` }
  if (name.split(' ')[0] === 'Meso') { imgSrc = `${process.env.PUBLIC_URL}/assets/images/relicMeso100x123.png` }
  if (name.split(' ')[0] === 'Neo') { imgSrc = `${process.env.PUBLIC_URL}/assets/images/relicNeo100x123.png` }
  if (name.split(' ')[0] === 'Axi') { imgSrc = `${process.env.PUBLIC_URL}/assets/images/relicAxi100x123.png` }

  return (
    <div className='card' 
      id={name} 
      onClick={clickEvent}
    >
      <h1 className='cardTitle'>{name} Relic</h1>
      <img src={imgSrc} alt='relic' />
      <ul className='dropListCard'>
        <li className='dropRare'>{drops[0]}</li>
        <li className='dropUncommon'>{drops[1]}</li>
        <li className='dropUncommon'>{drops[2]}</li>
        <li className='dropCommon'>{drops[3]}</li>
        <li className='dropCommon'>{drops[4]}</li>
        <li className='dropCommon'>{drops[5]}</li>
      </ul>
    </div>
  )
}

export default Card;