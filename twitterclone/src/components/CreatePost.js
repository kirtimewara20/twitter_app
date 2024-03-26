import React from 'react';
import Avatar from 'react-avatar';
import { FaImages } from "react-icons/fa";
import { MdOutlineGifBox, MdOutlineEmojiEmotions } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function CreatePost() {
  return (
    <div className='w-[100%] border-b border-gray-200'>
        <div>
        <div className='flex items-center justify-evenly border-b border-gray-200'>
            <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
            </div>
            <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
            </div>
        </div>
        <div>
            <div className='flex items-center p-4'>
                <div>
                    <Avatar src="https://pbs.twimg.com/profile_images/1607306405299785728/28-qH0Rb_400x400.jpg" size="40" round={true} />
                </div>
                <input className='w-full outline-none border-none text-xl ml-2' type='text' placeholder='What is happening?' />
            </div>
            <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                <div>
                    <FaImages size="22px" />
                </div>
                <div>
                    <MdOutlineGifBox size="22px" />
                </div>
                <div>
                    <MdOutlineEmojiEmotions size="22px" />
                </div>
                <div>
                    <FaLocationDot size="22px" />
                </div>
                <button className='bg-[#1D9BF0] px-4 py-1 text-lg text-white border-none rounded-full'>Post</button>
            </div>
        </div>
        </div>
    </div>
  )
}
