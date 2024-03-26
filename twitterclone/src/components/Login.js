import React, { useState } from 'react';
import axios from "axios";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = async(e) => {
    e.preventDefault();
    if(isLogin) {
      //login
      try {
        const res =  await axios.post("https://jsonplaceholder.typicode.com/users", {email, password});
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }else {
      //signup
      try {
        const res =  await axios.post("https://jsonplaceholder.typicode.com/users", {name, username, email, password});
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  }

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  }  
 
 return (
    <div className='w-screen h-screen flex items-center justify-evenly'>
      <div className='flex items-center justify-around w-[80%]'>
        <div>
           <img className='ml-5' width={"300px"} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png.png" alt="logo"/> 
        </div>
        <div>
          <div className='my-5'>
            <h1 className='font-bold text-6xl'>Happening now</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{!isLogin ? "Signup" : "Login"}</h1>
          <form onSubmit={submitHandler} className='flex flex-col w-[55%]'>
            {
              !isLogin && (<>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value) } placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
              </>)
            }
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold'/>
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password'className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
            <button className='bg-[#1D9BF0] border-none py-2 rounded-full text-lg my-4 text-white'>{!isLogin ? "Create Account" : "Login"}</button>
            <h1>{isLogin ? "Do not have an account ?" :  "Already have an account? "} <span className='font-bold text-blue-600 cursor-pointer' onClick={loginSignupHandler}>{isLogin ? "Signup" : "Login"}</span></h1>
          </form>
        </div> 
      </div>
    </div>
  )
}
