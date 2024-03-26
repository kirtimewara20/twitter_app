import React, {useState, useEffect} from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import {Link} from 'react-router-dom'
import Avatar from 'react-avatar';
import axios from 'axios';

export default function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className='w-[50%] border-l border-r border-gray-200 bg-white shadow-lg rounded-lg p-4'>
      <div>
        <div className='flex items-center py-2'>
          <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
            <IoMdArrowRoundBack size="24px" />
          </Link>
          <div className='ml-2'>
            <h1 className='font-bold text-lg'>{userData?.name}</h1>
            <p className='text-gray-500 text-sm'>10k post</p>
          </div>
        </div>
        <img className=' w-[100%] h-52' src="https://t4.ftcdn.net/jpg/05/31/79/83/360_F_531798391_XFz7gyPmDRTAfiEE5sRjFu5NpKrJt4rC.jpg" alt="banner"/>
        <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
          <Avatar src="https://pbs.twimg.com/profile_images/1607306405299785728/28-qH0Rb_400x400.jpg" size="120" round={true} />
        </div>
        <div className='text-right m-4'>
          <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>
        </div>
        <div className='m-4'>
          <h1 className='font-bold text-xl'>{userData?.name}</h1>
          <p>@{userData?.username}</p>
        </div>
        <div className='m-4 text-sm'>
          <p>Sharing things I'm learning through my foundation work and other interests.</p>
        </div>
      </div>
    </div>
  )
}
