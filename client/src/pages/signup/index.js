import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { db,auth } from "../../config/config";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export function SignUp(){

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    const data = {
        name: name,
        mail: mail,
        number: number
    }

    async function send(){
        if(name==='' || number==='' || mail==='' || pass===''){
            alert("Enter All Deatails")
        }else{
            try{
                const user = await createUserWithEmailAndPassword(auth,mail,pass)
                await setDoc(doc(db,"users",mail),data).then(()=>{
                    window.location.href = "/"
                })
            }catch(error){
                console.log(error.message);
            }
        }
    }

    return(
        <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center">
            <h2 className="mb-4 font-bold text-xl font-mono">SIGN UP FORM</h2>
            <div className="bg-gray-300 flex flex-col items-center justify-center p-12 rounded">
                <InputField placeholder="Enter Your Name" type="text" onChange={(e)=>setName(e.target.value)}/>
                <InputField placeholder="Enter Your Phone Number" type="number" onChange={(e)=>setNumber(e.target.value)}/>
                <InputField placeholder="Enter Your E-Mail" type="mail" onChange={(e)=>setMail(e.target.value)}/>
                <InputField placeholder="Enter Your Password" type="password" onChange={(e)=>setPass(e.target.value)}/>
                <Button title="Submit" to="" active={true} onClick={send}/>
            </div>
            <div className="mt-3">Already have an Account? 
                <span className="text-blue-800 font-medium cursor-pointer ml-1">
                    <Link to='/login'>Login</Link>
                </span>
            </div>
        </div>
    )
}