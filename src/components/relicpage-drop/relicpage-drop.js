import React from 'react'

const RelicPageItem = (props) => {
  const { relic, className, rmvDrop, addDrop, i } = props
  return (
    <div className={className}>
      <button className='btnMinus' onClick={() => rmvDrop(i)}>-</button>
      <p>{relic.drops[i]}</p>
      <button className='btnPlus' onClick={() => addDrop(i)}>+</button>
    </div>
  )
}

export default RelicPageItem;