import React from 'react';
import { IoSearch } from "react-icons/io5";
import Avatar from 'react-avatar';

export default function RightSidebar({user}) {
  const filteredUsers = user.slice(0, 3);
  return (
    <div className="w-[25%] bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center p-2 bg-gray-100 rounded-full w-full mb-4">
        <IoSearch size="20px" />
        <input type="text" className="bg-transparent outline-none px-2 w-full" placeholder="Search" />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl">
        <h1 className="font-bold text-lg mb-4">Who to follow</h1>
        {filteredUsers.map(user => (
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Avatar src="https://pbs.twimg.com/profile_images/1607306405299785728/28-qH0Rb_400x400.jpg" size="40" round={true} />
            <div className="ml-3">
              <h1 className="font-semibold text-gray-800">{user.name}</h1>
              <p className="text-gray-500 text-sm">@{user.username}</p>
            </div>
          </div>
          <button className="px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Follow</button>
        </div>
        ))}
      </div>
    </div>
  );
}
