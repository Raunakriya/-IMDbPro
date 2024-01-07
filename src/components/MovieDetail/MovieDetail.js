import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  removeSelectedetail,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.movies.detail);
  const isLoading = useSelector((state) => state.movies.isLoading);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedetail());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="detail-container">
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <>
          <div className="movie-detail">
            <div className="movie-title">{detail.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i>
                {detail.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i>
                {detail.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i>
                {detail.Runtime}
              </span>
              <span>
                Year<i className="fa fa-calendar"></i>
                {detail.Year}
              </span>
            </div>
            <div className="movie-plot">{detail.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{detail.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{detail.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{detail.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{detail.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{detail.Awards}</span>
              </div>
            </div>
          </div>

          <div className="movie-poster">
            <img src={detail.Poster} alt={detail.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
