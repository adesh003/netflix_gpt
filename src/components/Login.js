import React, { useState, useRef } from "react";
import Header from "./Header";
import { Validator } from "../utils/Validator";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import{addUser} from '../utils/userSlice'
import { HOMEPAGE_BG_IMAGE, USER_AVATAR } from "../utils/constant";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();

  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };


  // AUTH LOGIC 

  const handleBtnData = (e) => {
    e.preventDefault();

    const Message = Validator(email.current.value, password.current.value);
    setErrorMessage(Message);

    if (Message) return;

    // SIGN UP USER
    if (!isSignInForm) {
      const name = userName.current.value; // Access the value here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // Update profile after successful sign-up
          updateProfile(user, {
            displayName: name,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  photoURL: photoURL,
                  displayName: displayName,
                })
              );
           
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }

    // SIGN IN USER
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

      
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src={HOMEPAGE_BG_IMAGE}
          alt="netflix-image"
        ></img>
      </div>
      <form className="absolute w-3/12 my-36 p-12 bg-black mx-auto right-0  left-0  rounded-lg flex flex-col bg-opacity-80">
        <h1 className="font-bold text-3xl py-3 text-white ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            className="p-2 my-4 bg-gray-600 text-white placeholder-gray-300"
            type="text"
            placeholder="Name"
          />
        )}

        <input
          className="p-2 my-4 bg-gray-600 "
          ref={email}
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-2 my-4 bg-gray-600"
          type="Password"
          placeholder="Password"
        />
        <p className="text-red-700 font-bold">{errorMessage}</p>

        <button
          onClick={handleBtnData}
          className="p-4 my-4 cursor-pointer bg-red-700 text-white rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignInForm} className=" cursor-pointer text-white">
          {isSignInForm
            ? "New to Netflix-GPT ? Sign up Now"
            : "Already registed ? Login here"}
        </p>
      </form>
    </>
  );
};

export default Login;
