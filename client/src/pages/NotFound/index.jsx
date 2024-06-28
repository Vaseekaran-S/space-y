import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='w-full h-full flex-center flex-col'>
      <img src="/images/banner/404.gif" alt="404" className='lg:max-w-[300px] max-w-[250px] w-full object-cover'/>
      <h4 className='font-bold text-xl'>Lost In Space Y</h4>
      <Link to="/" className='font-medium mt-2'>Go to Home</Link>
    </div>
  )
}

export default NotFound
