import React from 'react'
import { FiX } from "react-icons/fi";

function PopupModal({ children, title, closeModal }) {

    return (
        <div className='fixed flex-center top-0 left-0 w-[100vw] h-[100vh] z-50'>
            <div className="bg-white rounded p-7 z-50">
                <div className='flex items-start justify-between border-b-2 border-b-black mb-5'>
                    <h2 className='text-lg font-medium pb-2'>{title}</h2>
                    <FiX className='text-xl font-bold text-white bg-red-900 p-1 rounded-full cursor-pointer' onClick={closeModal} />
                </div>
                {children}
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={closeModal}></div>
        </div>
    )
}

export default PopupModal
