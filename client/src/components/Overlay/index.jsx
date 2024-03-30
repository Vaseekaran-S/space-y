import React from 'react'

function Overlay({style}) {
  return (
    <div className={`absolute top-0 left-0 h-[100vh] w-[100vw] bg-[#43434347] ${style}`}>
    </div>
  )
}

export default Overlay
