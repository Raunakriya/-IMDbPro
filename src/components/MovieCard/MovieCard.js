import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-container">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-top">
          <div className="card-image">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-title">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
