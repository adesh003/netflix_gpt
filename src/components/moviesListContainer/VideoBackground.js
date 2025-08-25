import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/constant";

const VideoBackground = () => {
  const[TrailerId , setTralerId] = useState(null);

  const getMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/911430/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    console.log(filterData);
    const Trailer = filterData[0];
    setTralerId(Trailer.key)
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/ge_ABjtYx88?si=" + TrailerId }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
       autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
