import React from 'react'
import { FaHome, FaSearch,  } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoNotifications, IoPersonCircleSharp, IoBookmarkSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import {Link} from 'react-router-dom';

export default function LeftSidebar() {
  return (
    <div className='w-[20%] bg-white shadow-lg'>
      <div>
        <div>
          <img className='ml-5' width={"24px"} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png.png" alt="twitter-logo" />
        </div>
        <div className='my-4'>
          <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <FaHome size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Home</h1>
          </Link>
        </div>
        <div className='my-4'>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <MdMessage size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Messages</h1>
          </div>
        </div>
        <div className='my-4'>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <FaSearch size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Explore</h1>
          </div>
        </div>
        <div className='my-4'>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <IoNotifications size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Notification</h1>
          </div>
          <div className='my-4'>
          <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <IoPersonCircleSharp size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Profile</h1>
          </Link>
          <div className='my-4'>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <IoBookmarkSharp size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <IoIosLogOut size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Logout</h1>
          </div>
          <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}
