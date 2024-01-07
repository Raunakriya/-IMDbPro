import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const initialMovie = "Harry";
    const initialShow = "Friends";
    dispatch(fetchAsyncMovies(initialMovie));
    dispatch(fetchAsyncShows(initialShow));
  }, [dispatch]);
  return (
    <>
      <div className="list-container">
        <MovieListing />
      </div>
    </>
  );
};

export default Home;
