
import React, { useRef, useState } from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import axios from 'axios';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth } from '../../config/config';
import { useNavigate } from 'react-router-dom';

const storage = getStorage()

function AddPost() {

  const navigate = useNavigate()

  const [desc, setDesc] = useState('')
  const [localImageUrl, setLocalImageUrl] = useState('')
  const [imageFile, setImageFile] = useState('')
  const [isLoad, setIsLoad] = useState(false)
  
  const inputRef = useRef(null)

  function uploadImage(){
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  function currentImage(e){
    e.preventDefault()
    const file = e.target.files[0]
    setImageFile(file)
    setLocalImageUrl(URL.createObjectURL(e.target.files[0]))
  }

  function handleDrop(e){
    e.preventDefault()
    const file = e.dataTransfer?.files[0]
    setImageFile(file)
    setLocalImageUrl(URL.createObjectURL(e.dataTransfer.files[0]))
  }

  function handleDragOver(e){
    e.preventDefault()
  }

  async function add(){

    if(desc=='' && localImageUrl==''){
      alert("Enter All Details")
      return
    }else{

      setIsLoad(true)
      const storageRef = ref(storage,'users/'+auth?.currentUser.email+'/posts/'+new Date().getTime())
      await uploadBytes(storageRef,imageFile)
      const imageRef = await getDownloadURL(storageRef)

      try{
        axios.post("http://localhost:3001/addPost",{
          desc: desc,
          image: imageRef,
          date: new Date().toString(),
          userId: auth?.currentUser.email
        })
        navigate('/')
      }catch(error){
        console.log(error.message);
      }

    }

  }

  return (
    <div className="h-100 w-100 flex flex-col items-center justify-center">
        <div className={"loading-spinner "+(isLoad?"loading-spinner-active":"")}></div>
        <h2 className="m-4 font-bold text-xl font-mono">ADD POST</h2>
        <div className="bg-gray-300 flex flex-col items-center justify-center p-12 rounded">
          <div className='md:flex justify-between mb-[20px] md:w-[50vw] w-[60vw]'>
            <div className='lg:w-1/2'>
              <h2 className='mb-5 font-bold text-2xl'>USER : {auth?.currentUser?.email}</h2>
              <textarea rows={8} onChange={(e)=>setDesc(e.target.value)} placeholder="Enter Description" className='mb-5 w-full rounded border-[1px] border-black'></textarea>
            </div>
            <div className='lg:w-1/2 flex items-center justify-center'>
              <div className='w-[250px] h-[250px] bg-gray-800 rounded flex items-center justify-center' onDrop={handleDrop} onDragOver={handleDragOver}>
                <InputField forwardref={inputRef} type="file" onChange={currentImage} hidden accept={"*"}/>
                <button onClick={uploadImage} className='text-white fond-medium p-5 border-dashed rounded border-2 border-white absolute'>UPLOAD IMAGE</button>
                {localImageUrl? <img src={localImageUrl} className='h-full w-64'/>:""}
              </div>
            </div>
          </div>
            <Button to="" active={true} title="Add New Post" onClick={add}/>
        </div>
    </div>
  )
}

export default AddPost
