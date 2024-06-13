import React, { useState } from 'react'
import Button from '../buttons/EditBtn'

function IsFollow() {
  const [isFollowing, setIsFollowing] = useState(false)
  const followUser = () => {
    setIsFollowing(true)
  }
  const unFollowUser = () => {
    setIsFollowing(false)
  }
  return (
    <div className='mt-3'>
      {isFollowing ?
        <Button title="Following" className="w-auto px-3 py-1 bg-blue-600 text-white text-sm" onClick={unFollowUser}/>
        :
        <Button title="Follow" className="w-auto px-3 py-1 bg-green-600 text-white text-sm" onClick={followUser}/>
      }
    </div>
  )
}

export default IsFollow
