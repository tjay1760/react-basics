import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const myKey = "941707c";
const moviesAPI = `http://www.omdbapi.com/?apikey=${myKey}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  async function searchMovies(title) {
    const res = await fetch(`${moviesAPI}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <h1>Movie Land </h1>
      <div className="search">
        <input placeholder="Batman" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}></input>
        <img src={SearchIcon} alt="search" onClick={() => {searchMovies(searchTerm)}} />
      </div>
      {movies?.length > 0 ? (
        
          <div className="container">
            {movies.map((movie)=>
            (  <MovieCard key = {movie.title}
              testData={movie} />)
            )}
          
        </div>
      
      ) : (<div className="empty">
        <h2>Movies not found</h2>
      </div>
        
      )}
    </>
  );
}

export default App;
