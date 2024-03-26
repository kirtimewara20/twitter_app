import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { FaRegComment, FaRegHeart, FaRegBookmark } from "react-icons/fa";
//import axios from "axios";

export default function Tweet() {
    const [posts, setPosts] = useState([]);
    const filteredPosts = posts.slice(0, 3);
    const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, [users.id]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, [users?.id]);

    return (
        <div>
            {filteredPosts.map((post, index) => (
                <div key={post.id} className={`flex p-4 hover:bg-slate-100 ${index !== filteredPosts.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <Avatar src="https://pbs.twimg.com/profile_images/1607306405299785728/28-qH0Rb_400x400.jpg" size="40" round={true} />
                    <div className='ml-2 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold'>{users?.name}</h1>
                            <p className='text-gray-500 text-sm ml-1'>@{users?.username}.1h</p>
                        </div>
                        <div>
                            <p>{post.body}</p>
                        </div>
                        <div className='flex justify-between my-3'>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                                    <FaRegComment size="22px" />
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                                    <FaRegHeart size="22px" />
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'>
                                    <FaRegBookmark size="22px" />
                                </div>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}