import MovieThumbnailCard from "./MovieThumbnailCard";

/**
 * generates the list of movies that belong to the given genre
 * @param {genreTitle: the genre of the movie, data: the movies list from which movies need to be filtered out} props
 * @returns
 */
function GenreRoll(props) {
  return (
    <div className="movieRoll">
      <h3>{props.genreTitle}</h3>
      <div className="scrollmenu">
        {props.data.map((movie) => {
          if (movie.genres.indexOf(props.genreTitle) !== -1) {
            return (
              <MovieThumbnailCard
                data={movie}
                key={movie.id}
              ></MovieThumbnailCard>
            );
          }
        })}
      </div>
    </div>
  );
}
export default GenreRoll;
