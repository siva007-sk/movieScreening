import { useState } from "react";
import MovieDetails from "./MovieDetails";

function MovieThumbnailCard(props) {
  const [displayMovieDetails, setDisplayMovieDetails] = useState(false);
  if (props.data) {
    return (
      <div className="card">
        <div
          id="myModal"
          class="modal"
          style={{ display: `${displayMovieDetails ? "block" : "none"}`,backgroundImage:`url(${props.data.backdrop})` }}
        >
          <div class="modal-content">
            <span class="close" onClick={() => setDisplayMovieDetails(false)}>
              &times;
            </span>
            <MovieDetails details={props.data}></MovieDetails>
          </div>
        </div>
        <img
          src={props.data.poster}
          alt={"moviePoster"}
          className="posterImage"
          onClick={() => setDisplayMovieDetails(true)}
        ></img>
      </div>
    );
  }
  return <div></div>;
}
export default MovieThumbnailCard;
