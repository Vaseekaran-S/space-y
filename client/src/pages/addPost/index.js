
import React, { useState } from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage()

function AddPost() {

  const [desc, setDesc] = useState('')
  const [imageFile, setImageFile] = useState('')
  const [image, setImage] = useState('')

  async function add(){

    const storageRef = ref(storage,'posts/users/img.png')
    await uploadBytes(storageRef,imageFile)
    const imageRef = await getDownloadURL(storageRef)

    setImage(imageRef)

    await axios.post("http://localhost:3001/addPost",{
      desc: desc,
      image: image,
      date: new Date().toDateString()
    })
  }

  return (
    <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center">
        <h2 className="mb-4 font-bold text-xl font-mono">ADD POST</h2>
        <div className="bg-gray-300 flex flex-col items-center justify-center p-12 rounded">
            <textarea cols={30} rows={4} onChange={(e)=>setDesc(e.target.value)} placeholder="Enter Description" className='mb-5 w-[200px] rounded border-[1px] border-black'></textarea> 
            <InputField placeholder="Enter Your Password" type="file" onChange={(e)=>setImageFile(e.target.files[0])}/>
            <button onClick={add}>Click</button>
        </div>
    </div>
  )
}

export default AddPost
