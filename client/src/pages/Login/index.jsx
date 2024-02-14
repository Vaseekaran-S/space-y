import React from 'react'
import RegistrationForm from '../../components/cards/RegistrationForm'

function Login() {
  return (
    <div className='h-full flex-center flex-col gap-5 p-10'>
      <RegistrationForm type="login"/>
    </div>
  )
}

export default Login
