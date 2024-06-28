import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUserAction, unFollowUserAction } from '../../actions/users'

function IsFollow({ userId, fetchUserData }) {
  const dispatch = useDispatch()
  const curUser = useSelector(store => store.profile.userData)
  const curUserId = curUser?._id

  const [isFollowing, setIsFollowing] = useState(false)
  const [isFollowed, setIsFollowed] = useState(false)

  useEffect(() => {
    setIsFollowing(curUser?.following?.includes(userId))
    setIsFollowed(curUser?.followers?.includes(userId))
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
      <button className={`w-auto px-3 py-1 rounded font-medium text-white text-sm ${isFollowing?'bg-blue-600':'bg-green-600'}`} onClick={isFollowing?unFollow:follow} > {isFollowing?'Following':`Follow ${isFollowed? "Back": ""}`}</button>
    </div>
  )
}

export default IsFollow
