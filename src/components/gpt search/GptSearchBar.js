import React, { useRef } from 'react'

function GptSearchBar() {
  const input = useRef();
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Search bar & button ek line me */}
      <div className="flex items-center mt-40">
        <input
          ref={input}
          type="text"
          className="w-64 mr-4 px-4 py-2 rounded-md shadow-md outline-none text-black"
          placeholder="Search Movie..."
        />

        <button className="bg-red-700 hover:bg-red-800 px-6 py-2 text-white font-medium rounded-md transition duration-200">
          Search
        </button>
      </div>
    </div>
  )
}

export default GptSearchBar
