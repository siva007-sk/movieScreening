function MovieDetails(props) {
  return (
    <div className="detailsGrid">
      <img
        src={props.details.poster}
        alt={"movie poster"}
        className="poster"
      ></img>
      <div className="details">
        <div>
          <h3>{props.details.title}</h3>
          <div>{props.details.imdb_rating}</div>
        </div>
        <div>
          {new Date(props.details.released_on).getFullYear()}|
          {props.details.length}|{props.details.director}
        </div>
        <div>cast: {props.details.cast.join(', ')}</div>
        <div>{props.details.overview}</div>
      </div>
    </div>
  );
}

export default MovieDetails;
