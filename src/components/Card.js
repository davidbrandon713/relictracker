import React from 'react';

const Card = ({ name, drops, imgSrc, clickEvent }) => {
  if (name.split(' ')[0] === 'Lith') { imgSrc = '/relicLith100x123.png' }
  if (name.split(' ')[0] === 'Meso') { imgSrc = '/relicMeso100x123.png' }
  if (name.split(' ')[0] === 'Neo') { imgSrc = '/relicNeo100x123.png' }
  if (name.split(' ')[0] === 'Axi') { imgSrc = '/relicAxi100x123.png' }

  return (
    <div className='tc grow bg-lightest-blue br3 pa3 ma2 dib bw2 shadow-5' id={name} onClick={clickEvent}>
      <h1>{name}</h1>
      <img alt='relic' src={imgSrc} />
      <div className='dropListCard'>
        <h4 className='dropRare'>{drops[0]}</h4>
        <h4 className='dropUncommon'>{drops[1]}</h4>
        <h4 className='dropUncommon'>{drops[2]}</h4>
        <h4 className='dropCommon'>{drops[3]}</h4>
        <h4 className='dropCommon'>{drops[4]}</h4>
        <h4 className='dropCommon'>{drops[5]}</h4>
      </div>
    </div>
  );
}

export default Card;