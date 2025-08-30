import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import GptMovieSearch from "./gpt search/GptMovieSearch";
import MovieInfo from "./movieInfo/MovieInfo";
import Error from "./Error";

const Body = () => {
  const appRouter = createBrowserRouter([
{
      path: "/",
      element: <Login />,
      errorElement: <Error />, // Add error component here
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <Error />,
    },
    {
      path: "/gptmovieSearch",
      element: <GptMovieSearch />,
      errorElement: <Error />,
    },
    {
      path: "/movieInfo/:id",
      element: <MovieInfo />,
      errorElement: <Error />,
    },
    { path: "/erro",
    element: <Error/>
 },

  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
