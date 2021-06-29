function MovieDetails(props) {
  return (
    <div className="detailsGrid">
      <img
        src={props.details.poster}
        alt={"movie poster"}
        className="poster"
      ></img>
      <div className="details">
        <div className="row">
          <h3>{props.details.title}</h3>
          <div>{props.details.imdb_rating}</div>
        </div>
        <div className="row">
          <p>
            {new Date(props.details.released_on).getFullYear()} | {props.details.length} | {props.details.director}
          </p>
        </div>
        <div className="row">
          <p><strong>Cast: </strong> {props.details.cast.join(", ")}</p>
        </div>
        <div className="row">
          <p>{props.details.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
