
import React from 'react'

function EditInput({...props}) {
  return (
    <div>
        
        <input className="w-[200px] h-[35px] text-sm border border-black rounded pl-3 mb-5" {...props}/>      
    </div>
  )
}

export default EditInput
