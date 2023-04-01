import React from 'react'

const CalcContainerItem = (props) => {
  const { title, value } = props
  return (
    <div className='calcItem'>
      <p className='calcTitle'>{title}</p>
      <p className='calcValue'>{value}</p>
    </div>
  )
}

export default CalcContainerItem;