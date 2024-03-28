import React, { useState, useEffect } from 'react'

import './simple.css'

const Scroll = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
  })

  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        height: window.innerHeight,
      })
    }
  }, [])

  return (
    <div
      className="scroll-container"
      style={{
        height: windowSize.height - 99,
      }}
    >
      {children}
    </div>
  )
}

export default Scroll
