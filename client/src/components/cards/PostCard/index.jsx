import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { FaHeart } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { IoMdSend } from "react-icons/io";

import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function PostCard() {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <div className='w-[400px] rounded border shadow hover:shadow-lg '>
      <div className="flex items-center justify-between p-3">
        <div className='flex'>
          <img src="https://i.pinimg.com/736x/60/72/cb/6072cb81fbaac9f7750561675ef9ad71.jpg" alt="" loading='lazy' className='h-[55px] w-[55px] rounded-full' />
          <div>
            <Link to="/">
              <h1 className='text-xl font-bold ml-3'>Vasekaran</h1>
            </Link>
            <Link to="/location">
              <h1 className='text-xs font-medium ml-4'>Chennai</h1>
            </Link>
          </div>
        </div>
        <div>
        <HiOutlineDotsHorizontal cursor="pointer" onClick={()=>{}}/>
        </div>
      </div>
      <div className='h-[350px] overflow-hidden center'>
        <img src="https://i.pinimg.com/736x/60/72/cb/6072cb81fbaac9f7750561675ef9ad71.jpg" alt="" loading='lazy' />
      </div>
      <div className='flex items-center justify-between border p-3'>
        <div className='flex-center gap-3'>
          <FaHeart cursor="pointer" color={isLiked ? 'red' : 'grey'} fontSize="23px" onClick={() => setIsLiked(!isLiked)} />
          <GoComment cursor="pointer" fontSize="23px" />
          <IoMdSend cursor="pointer" fontSize="23px" />
        </div>
        <div className='cursor-pointer'>
          {isSaved ? <BsBookmarkFill onClick={() => setIsSaved(false)} /> : <BsBookmark onClick={() => setIsSaved(true)} />}


        </div>
      </div>
    </div>
  )
}

export default PostCard
