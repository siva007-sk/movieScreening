import { useState } from "react";
import MovieDetails from "./MovieDetails";

/**
 * to display the thumbnail image and modal for additional details for the selected movie
 * @param {data: the details of the particular movie} props
 * @returns
 */
function MovieThumbnailCard(props) {
  const [displayMovieDetails, setDisplayMovieDetails] = useState(false);
  if (props.data) {
    return (
      <div className="card">
        <div
          id="myModal"
          className="modal"
          style={{ display: `${displayMovieDetails ? "block" : "none"}` }}
        >
          <div
            className="modal-content"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.data.backdrop})`,
            }}
          >
            <span
              className="close"
              onClick={() => setDisplayMovieDetails(false)}
            >
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
