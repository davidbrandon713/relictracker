import React from 'react'

const CalcContainerItem = (props) => {
  const { title, value } = props
  return (
    <div className='calcItem'>
      <p className='calcTitle'>{title}</p>
      <div className='calcValueContainer'>
        <p className='calcValue'>{value}</p>
      </div>
    </div>
  )
}

export default CalcContainerItem;