import React from "react";

const VideoTitle = ({ original_title, overview }) => {
  return (
    
    <div className="absolute bg-gradient-to-r from-black w-screen aspect-video "> 
    <div className="absolute top-1/4 left-12 pt-[10%]  text-white max-w-xl ">
      <h1 className="font-extrabold text-6xl drop-shadow-lg mb-4">
        {original_title}
      </h1>
      <p className="text-lg text-gray-200 drop-shadow-md mb-6">
        {overview}
      </p>
      <div className="flex space-x-4">
        <button className="p-4 px-10 rounded-lg bg-white text-black font-bold hover:bg-gray-300 transition">
          ▶️ Play
        </button>
        <button className="p-4 px-10 rounded-lg bg-gray-600 bg-opacity-50 hover:bg-opacity-70 transition">
          More Info
        </button>
      </div>
    </div>
    </div>
  );
};


export default VideoTitle;


