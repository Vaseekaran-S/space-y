import React, { useRef, useState } from 'react'
import { MdChangeCircle } from 'react-icons/md';
import { FaFileImage } from "react-icons/fa";

import Button from '../buttons/EditBtn'

import { uploadFileAtDb } from '../../api/uploads/index'

export default function DragAndDrop() {

    const [imageUrl, setImageUrl] = useState('')
    const [imageFile, setImageFile] = useState('')

    const inputRef = useRef(null)

    function selectImage() {
        (inputRef.current) && inputRef.current.click()
    }

    const uploadImage = e => {
        e.preventDefault()
        const file = e.target?.files[0]
        if(file){
            setImageFile(file)
            setImageUrl(URL.createObjectURL(file))
        }
    }

    const handleDrop = e => {
        e.preventDefault()
        const file = e.dataTransfer?.files[0]
        setImageFile(file)
        setImageUrl(URL.createObjectURL(file))
    }

    const handleDragOver = e => e.preventDefault()

    const uploadFile = async () => {
        uploadFileAtDb(imageFile)
    }

    return (
        <div className='flex flex-col items-center lg:w-[300px]'>
            <div className={`w-full h-[200px] mb-3 rounded flex items-center justify-center p-2 ${imageUrl || 'bg-gray-800'}`} onDrop={handleDrop} onDragOver={handleDragOver}>
                <input ref={inputRef} type="file" onChange={uploadImage} hidden accept="image/png, image/gif, image/jpeg" />
                {!imageUrl &&
                    <button onClick={selectImage} className='text-white fond-medium p-5 border-dashed rounded border-2 border-white absolute'>UPLOAD IMAGE</button>
                }
                {imageUrl && <img src={imageUrl} alt='Profile Image' className='h-full rounded' />}
            </div>
            <Button title={<>{imageUrl ? <MdChangeCircle className='mr-2' /> : <FaFileImage className='mr-2' />}{imageUrl ? 'Change Image' : 'Upload Image'}</>} onClick={selectImage} />
            {imageUrl && <Button title="Save & Upload" active={true} className="mt-3" onClick={uploadFile} />}
        </div>
    )
}