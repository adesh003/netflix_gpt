import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[isSignInForm, setIsSignInForm]= useState(true)
    const toggleSignInForm = ()=>{
            setIsSignInForm(!isSignInForm);
    }
  return (
    <>
    <Header/>
    <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg' alt='netflix-image'></img>
    </div>
    <form className='absolute w-3/12 my-36 p-12 bg-black mx-auto right-0  left-0  rounded-lg flex flex-col bg-opacity-80' >
    <h1 className='font-bold text-3xl py-3 text-white '>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && (
  <input
    className='p-2 my-4 bg-gray-600 text-white placeholder-gray-300'
    type='text'
    placeholder='Name'
  />
)}
        
        <input className='p-2 my-4 bg-gray-600 ' type='text' placeholder='Email Address' />
        <input className='p-2 my-4 bg-gray-600' type='Password' placeholder='Password' />
        <button className='p-4 my-4 cursor-pointer bg-red-700 text-white rounded-lg'>{isSignInForm?"Sign In" :"Sign Up"}</button>
        <p
        onClick={toggleSignInForm} 
        
        className=' cursor-pointer text-white'>{isSignInForm ? "New to Netflix-GPT ? Sign up Now" : "Already registed ? Login here" }</p>

        
    </form>
    </>  
  )
}

export default Login
