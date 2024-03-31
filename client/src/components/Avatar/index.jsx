import React from 'react'
import Avatar from 'react-avatar'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

function ProfileAvatar() {

  const username = useSelector( store => store.profile.username)
  const navigate = useNavigate()
  
  return (
    <>
      {(username) ?
        <Avatar className='cursor-pointer rounded-full' size='100%' round={true} name={username} onClick={() => { (window.location.pathname == '/profile') ? navigate('/') : navigate('/profile') }} />
        :
        <Avatar facebookId="100008343750912" size="40" onClick={() => navigate('/')} className='cursor-pointer' round={true} />
      }
    </>
  )
}

export default ProfileAvatar
