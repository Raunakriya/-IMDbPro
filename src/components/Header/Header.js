import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(searchTerm));
    dispatch(fetchAsyncShows(searchTerm));
    setSearchTerm("");
  };
  return (
    <div className="header">
      <div className="brand-name">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search Movies and Shows..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-img">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
