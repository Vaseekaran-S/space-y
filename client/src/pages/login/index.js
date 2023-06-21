
import React, { useState } from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/config';


function Login() {

    const navigate = useNavigate()
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    async function verify() {
        if (mail === '' || pass === '') {
            alert("Enter All Deatails")
        } else {
            try {
                const user = await signInWithEmailAndPassword(auth, mail, pass)
                navigate("/")
            } catch (error) {
                console.log(error.message);
            }
        }
    }
    return (
        <div className="h-[90vh] w-100 flex flex-col items-center justify-center">
            <h2 className="mb-4 font-bold text-xl font-mono">LOGIN FORM</h2>
            <div className="bg-gray-300 flex flex-col items-center justify-center p-12 rounded">
                <InputField placeholder="Enter Your E-Mail" type="mail" onChange={(e) => setMail(e.target.value)} />
                <InputField placeholder="Enter Your Password" type="password" onChange={(e) => setPass(e.target.value)} />
                <Button title="Login" to="" active={true} onClick={verify} />
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