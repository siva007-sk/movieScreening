import { useEffect, useState } from "react";
import "./App.css";
import MovieThumbnailCard from "./Components/MovieThumbnailCard";

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch("https://wookie.codesubmit.io/movies", {
      method: "GET",
      headers: new Headers({ Authorization: "Bearer Wookie2021" }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data.movies);
      });
  });

  return (
    <div className="App">
      <header className="heading">
        <h1>Wookie Movies</h1>
        <input placeholder="Search" className="search-box"></input>
      </header>
      <main>
        <div className="movieRoll">
          <h3>Action</h3>
          <div className="scrollmenu">
            {movieData.map((movie) => {
              if (movie.genres.indexOf("Action") !== -1) {
                return <MovieThumbnailCard data={movie}></MovieThumbnailCard>;
              }
            })}
          </div>
        </div>
        <div className="movieRoll">
          <h3>Crime</h3>
          <div className="scrollmenu">
            {movieData.map((movie) => {
              if (movie.genres.indexOf("Crime") !== -1) {
                return <MovieThumbnailCard data={movie}></MovieThumbnailCard>;
              }
            })}
          </div>
        </div>
        <div className="movieRoll">
          <h3>Drama</h3>
          <div className="scrollmenu">
            {movieData.map((movie) => {
              if (movie.genres.indexOf("Drama") !== -1) {
                return <MovieThumbnailCard data={movie}></MovieThumbnailCard>;
              }
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
