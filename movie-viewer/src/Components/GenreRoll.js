import MovieThumbnailCard from "./MovieThumbnailCard";

function GenreRoll(props) {
  return (
    <div className="movieRoll">
      <h3>{props.genreTitle}</h3>
      <div className="scrollmenu">
        {props.data.map((movie) => {
          if (movie.genres.indexOf(props.genreTitle) !== -1) {
            return <MovieThumbnailCard data={movie}></MovieThumbnailCard>;
          }
        })}
      </div>
    </div>
  );
}
export default GenreRoll;
