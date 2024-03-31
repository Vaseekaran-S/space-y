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
    <div className='max-w-[400px] m-auto rounded border shadow hover:shadow-lg '>
      <div className="flex items-center justify-between p-3">
        <div className='flex'>
          <img src="https://i.pinimg.com/736x/60/72/cb/6072cb81fbaac9f7750561675ef9ad71.jpg" alt="" loading='lazy' className='h-[55px] w-[55px] rounded-full' />
          <div className='ml-3'>
            <Link to="/">
              <h1 className='text-xl font-bold'>Vaseekaran</h1>
            </Link>
            <Link to="/location">
              <span>Chennai</span>
            </Link>
          </div>
        </div>
        <HiOutlineDotsHorizontal cursor="pointer" />
      </div>
      <hr />
      <div className='h-[350px] overflow-hidden center'>
        <img src="https://i.pinimg.com/736x/60/72/cb/6072cb81fbaac9f7750561675ef9ad71.jpg" alt="" loading='lazy' />
      </div>
      <hr />
      <div className='flex items-center justify-between p-3'>
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
