import React, { useRef, useState } from 'react'
import { MdChangeCircle } from 'react-icons/md';
import { FaFileImage } from "react-icons/fa";

import Button from '../buttons/EditBtn'

export default function DragAndDrop() {

    const [imageUrl, setImageUrl] = useState('')
    const [imageFile, setImageFile] = useState('')

    const inputRef = useRef(null)

    function uploadImage() {
        (inputRef.current) && inputRef.current.click()
    }

    function currentImage(e) {
        e.preventDefault()
        const file = e.target.files[0]
        setImageFile(file)
        setImageUrl(URL.createObjectURL(e.target.files[0]))
    }

    function handleDrop(e) {
        e.preventDefault()
        const file = e.dataTransfer?.files[0]
        setImageFile(file)
        setImageUrl(URL.createObjectURL(e.dataTransfer.files[0]))
    }

    function handleDragOver(e) {
        e.preventDefault()
    }

    return (
        <div className='flex flex-col items-center lg:w-[300px]'>
            <div className={`w-full h-[200px] mb-3 rounded flex items-center justify-center p-2 ${imageUrl || 'bg-gray-800'}`} onDrop={handleDrop} onDragOver={handleDragOver}>
                <input ref={inputRef} type="file" onChange={currentImage} hidden accept={"*"} />
                {!imageUrl &&
                    <button onClick={uploadImage} className='text-white fond-medium p-5 border-dashed rounded border-2 border-white absolute'>UPLOAD IMAGE</button>
                }
                {imageUrl && <img src={imageUrl} className='h-full rounded' />}
            </div>
            <Button title={<>{imageUrl?<MdChangeCircle className='mr-2'/>:<FaFileImage className='mr-2'/>}{imageUrl?'Change Image':'Upload Image'}</>} onClick={uploadImage} />
            {imageUrl &&
                    <Button title="Save & Upload" active={true} className="mt-3" />
            }
        </div>
    )
}