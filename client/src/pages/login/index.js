
import React, { useState } from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

function Login() {

  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')

  function send(){

  }

  return (
    <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center">
        <h2 className="mb-4 font-bold text-xl font-mono">LOGIN FORM</h2>
        <div className="bg-gray-300 flex flex-col items-center justify-center p-12 rounded">
            <InputField placeholder="Enter Your E-Mail" type="mail" onChange={(e)=>setMail(e.target.value)}/>
            <InputField placeholder="Enter Your Password" type="password" onChange={(e)=>setPass(e.target.value)}/>
            <Button title="Submit" to="" active={true} onClick={send}/>
        </div>
        <div className="mt-3">New to SPACE Y ? 
            <span className="text-blue-800 font-medium cursor-pointer ml-1">
                <Link to='/signup'>SignUp here</Link>
            </span>
        </div>
    </div>
  )
}

export default Login