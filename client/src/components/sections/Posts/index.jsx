import React from 'react'

function PostsSection() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-">
        <div className="col-span-6 md:col-span-3 lg:col-span-2 border p-3">
            <img src="/images/profile/unknown.jpg" alt="" srcset="" className='min-h-[200px] max-h-[400px] w-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default PostsSection
