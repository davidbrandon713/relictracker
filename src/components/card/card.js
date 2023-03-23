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
      <div className='dropListCard'>
        <p className='dropRare'>{drops[0]}</p>
        <p className='dropUncommon'>{drops[1]}</p>
        <p className='dropUncommon'>{drops[2]}</p>
        <p className='dropCommon'>{drops[3]}</p>
        <p className='dropCommon'>{drops[4]}</p>
        <p className='dropCommon'>{drops[5]}</p>
      </div>
    </div>
  )
}

export default Card;