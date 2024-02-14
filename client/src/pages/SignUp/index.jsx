import React from 'react'
import RegistrationForm from '../../components/cards/RegistrationForm'

function Signup() {
  return (
    <div className='h-full flex-center flex-col gap-5 p-10'>
      <RegistrationForm type="signup"/>
    </div>
  )
}

export default Signup
