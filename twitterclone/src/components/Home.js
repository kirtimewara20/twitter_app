import React, {useEffect, useState} from 'react'
import LeftSidebar from "./LeftSidebar"
import RightSidebar from "./RightSidebar"
import { Outlet } from 'react-router-dom'

export default function Home() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUsers();
    }, []);

  return (
    <div className='flex justify-between w-[80%] mx-auto m-1'>
      <LeftSidebar />
      <Outlet/>
      <RightSidebar user={users}/>
    </div>
  )
}
