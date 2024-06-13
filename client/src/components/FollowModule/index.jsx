import React, { useEffect, useState } from 'react'
import Button from '../buttons/EditBtn'
import { useDispatch, useSelector } from 'react-redux'
import { followUserAction, unFollowUserAction } from '../../actions/users'

function IsFollow({ userId, fetchUserData }) {
  const dispatch = useDispatch()
  const curUser = useSelector(store => store.profile.userData)
  const curUserId = curUser?._id

  const [isFollowing, setIsFollowing] = useState(false)
  const [isFollowed, setIsFollowed] = useState(false)

  useEffect(() => {
    setIsFollowing(curUser.following.includes(userId))
    setIsFollowed(curUser.followers.includes(userId))
  }, [curUser, userId])

  const follow = async (event) => {
    event.target.disabled = true
    await dispatch(followUserAction(curUser?.username, curUserId, userId))
    await fetchUserData()
    event.target.disabled = false
  }

  const unFollow = async (event) => {
    event.target.disabled = true
    await dispatch(unFollowUserAction(curUser?.username, curUserId, userId))
    await fetchUserData()
    event.target.disabled = false
  }

  return (
    <div className='mt-3'>
      {isFollowing ?
        <Button title="Following" className="w-auto px-3 py-1 bg-blue-600 text-white text-sm" onClick={unFollow} />
        :
        <Button title={`Follow ${isFollowed? "Back": ""}`} className="w-auto px-3 py-1 bg-green-600 text-white text-sm" onClick={follow} />
      }
    </div>
  )
}

export default IsFollow
