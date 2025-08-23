import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector(store => store.user)

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // navigate("/error")
});
  }
  return (
    <div className="absolute top-0 left-0 w-full py-4 px-8 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix_logo"
        />
        {user && ( // Conditionally render navigation links
          <div className="hidden md:flex ml-10 text-white">
            <p className="mr-6 cursor-pointer hover:text-gray-300">Home</p>
            <p className="mr-6 cursor-pointer hover:text-gray-300">TV Shows</p>
            <p className="mr-6 cursor-pointer hover:text-gray-300">Movies</p>
            <p className="mr-6 cursor-pointer hover:text-gray-300">
              New & Popular
            </p>
            <p className="mr-6 cursor-pointer hover:text-gray-300">My List</p>
          </div>
        )}
      </div>
      {user && ( // Conditionally render profile icons and log out button
        <div className="flex items-center">
          {/* Search Icon as SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white mr-4 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {/* Bell Icon as SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white mr-4 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0a3 3 0 10-6 0"
            />
          </svg>
          <img
            className="w-8 h-8 rounded-md cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile_icon"
          />
          <div>
            <button
              onClick={handleSignOut}
              className="px-2 py-2 ml-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-300"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
