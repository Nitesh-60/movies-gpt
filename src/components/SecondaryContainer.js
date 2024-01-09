import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movie);
  return (
    <div className="bg-black w-screen">
      <div className="-mt-72 px-8 relative z-20">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies?.nowPlayingMovie}
        />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
