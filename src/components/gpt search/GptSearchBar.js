import React, { useRef, useState } from "react";
import { setgeminiMovies } from "../../utils/aiMovieSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../../utils/constant";
import { useDispatch } from "react-redux";

function GptSearchBar() {
  const dispatch = useDispatch();
  const searchBox = useRef();
  const [loading, setLoading] = useState(false);
  const [geminiResult, setGeminiResult] = useState("");

  const fetchFromTmbd = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGeminiMovieSearch = async () => {
    setLoading(true);
    setGeminiResult("");

    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

      if (!apiKey) {
        setGeminiResult("Configuration error: API Key is missing.");
        setLoading(false);
        return;
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const query =
        "Act as a Movie Recommendation system and suggest 5 movies for the query: " +
        searchBox.current.value +
        ". Give me only the names of the 5 movies, and they should be comma-separated like the following example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const result = await model.generateContent(query);
      const geminiResponse = result.response.text().split(",");

      const promiseArray = geminiResponse.map((movie) =>
        fetchFromTmbd(movie.trim())
      );

      const finalResult = await Promise.all(promiseArray);

      dispatch(setgeminiMovies({ movieName: geminiResponse, movieResult: finalResult }));
    } catch (error) {
      console.error("Error during movie search:", error);
      setGeminiResult("Sorry, something went wrong. Check the console for details.");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="absolute top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    flex items-center bg-white/20 backdrop-blur-md p-4 rounded-lg z-20 shadow-lg">
    <input
      ref={searchBox}
      type="text"
      className="w-[500px] mr-4 px-4 py-2 rounded-md shadow-md outline-none text-black"
      placeholder="Search Movie..."
      disabled={loading}
    />
    <button
      onClick={handleGeminiMovieSearch}
      className="bg-red-800 hover:bg-red-600 px-6 py-2 text-white font-medium rounded-md transition duration-200 disabled:bg-gray-400"
      disabled={loading}
    >
      {loading ? "Searching..." : "Search"}
    </button>
  </div>
);

}

export default GptSearchBar;
