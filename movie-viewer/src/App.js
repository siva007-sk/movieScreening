import { useEffect, useState } from "react";
import "./App.css";
import GenreRoll from "./Components/GenreRoll";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const genres = [
    "Action",
    "Crime",
    "Drama",
    "Animation",
    "Adventure",
    "Family",
    "Thriller",
  ];

  useEffect(() => {
    fetch(`https://wookie.codesubmit.io/movies?q=${searchQuery}`, {
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
        <input
          placeholder="Search"
          className="search-box"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        ></input>
      </header>
      <main>
        {genres.map((genre) => {
          return <GenreRoll data={movieData} genreTitle={genre}></GenreRoll>;
        })}
      </main>
    </div>
  );
}

export default App;
