import React from 'react'

const RelicPageItem = (props) => {
  const { relic, className, rmvDrop, addDrop, i } = props
  return (
    <div>
      <button className='btnMinus' onClick={() => rmvDrop(i)}>-</button>
      <p className={className}>{relic.drops[i]}</p>
      <button className='btnPlus' onClick={() => addDrop(i)}>+</button>
    </div>
  )
}

export default RelicPageItem;