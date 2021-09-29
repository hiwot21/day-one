import { useEffect, useState } from "react";
import { requestByTitle } from "../Components/Utils";
import "./MovieCard.css";
export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    requestByTitle(" Batman v superman").then((movieData) => {
      console.log(movieData);
      setMovieDetails(movieData);
    });
  }, []);

  return (
    <div className="movie-card" style={{ border: "1px solid black" }}>
      <div className="movies" key="">
        <div className="movie-img">
          <img src={movieDetails?.Poster} />
        </div>
        <div className="description">
          <div className="both">
            <h2 className="title">{movieDetails?.Title}</h2>
            <h2 className="rating">{movieDetails?.imdbRating}</h2>
          </div>
          <h2 className="rated">{movieDetails?.Rated}</h2>
          <h2 className="runtime">{movieDetails?.Runtime}</h2>
          <h2 className="genre">{movieDetails?.Genre}</h2>
          <h3>plot</h3>
          <h2 className="plot">{movieDetails?.Plot}</h2>
          <h3>Actors</h3>
          <h2 className="actors">{movieDetails?.Actors}</h2>
        </div>
      </div>
    </div>
  );
};
