import React from 'react'

const VideoTiltle = ({original_title , overview}) => {
  return (
 <div className="flex flex-col justify-center h-screen w-screen  px-12 ">
  <h1 className="font-bold text-6xl mb-4">{original_title}</h1>
  <p className="w-1/3 py-6 text-lg">{overview}</p>
  <div className="flex">
    <button className="p-4 px-10 rounded-lg text-white bg-gray-600 bg-opacity-50 hover:bg-opacity-70">
      ▶️ Play
    </button>
    <button className="ml-4 p-4 px-10 rounded-lg text-white bg-gray-600 bg-opacity-50 hover:bg-opacity-70">
      More Info
    </button>
  </div>
</div>

  )
}

export default VideoTiltle
