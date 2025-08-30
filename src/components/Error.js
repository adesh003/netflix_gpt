import React from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Error() {

    const navigate = useNavigate();
    const user = useSelector(store => store.user)

  const handleHomePage = () => {
    if (user) {
      navigate("/browse");
    }
  };

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 text-center">
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <div className="flex items-center space-x-2">
         <Header/>
        </div>
        
      </header>

      <div className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-lg shadow-2xl space-y-6 max-w-lg mx-auto transform -translate-y-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-red-600">
          Netflix is a little busy right now
        </h1>
        <p className="text-lg text-gray-300 max-w-prose">
          We're working on fixing this. Please try again in a few moments.
        </p>
        <button
        
        onClick={handleHomePage}
        className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition duration-300">
          Go Back
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
        Adesh is in Monk Mode to fix this Error.
      </div>
    </div>
  );
}

export default Error
