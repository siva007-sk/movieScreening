import { useEffect, useState } from "react";
import MovieThumbnailCard from "./MovieThumbnailCard";

function HomeComponent() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch("https://wookie.codesubmit.io/movies", {
      method: "GET",
      headers: new Headers({ Authorization: "Bearer Wookie2021" }),
    }).then((response) => response.json())
      .then((data) => {
        setMovieData(data.movies);
      });
  });

  return (
    <>
      <header>
        <h1>Wookie Movies</h1>
        <input></input>
      </header>
      <main>
        <h3>Action</h3>
        <div>
          <MovieThumbnailCard data={movieData[0]}></MovieThumbnailCard>
        </div>
      </main>
    </>
  );
}

export default HomeComponent;
