import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();



  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,   
    },
    {
      path: '/browse',
      element: <Browse />,  
    }
  ])

useEffect(()=>{

   const unsubscribe =  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid, email, displayName ,photoURL } = user;
    dispatch(addUser({uid:uid , email:email , photoURL :photoURL,displayName:displayName}))
  } else {
    dispatch(removeUser())
  }
});


return () => unsubscribe();
},[])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
