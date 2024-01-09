import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovise = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json?.results));
  };

  useEffect(() => {
    getUpComingMovise();
  }, []);
};

export default useUpComingMovies;
