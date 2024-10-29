import "./App.css";
import { useEffect } from "react";
import SearchIcon from "./search.svg";

const myKey = "941707c";
const moviesAPI = `http://www.omdbapi.com/?apikey=${myKey}`;
const testData = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg",
};
function App() {
  async function searchMovies(title) {
    const res = await fetch(`${moviesAPI}&s=${title}`);
    const data = await res.json();
    console.log(data.Search[0]);
  }
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <>
      <h1>Movie Land </h1>
      <div className="search">
        <input placeholder="Batman" value="Batman" onChange={() => {}}></input>
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div className="">
            <p>{testData.Year}</p>
          </div>
          <div>
            <img src ={testData.Poster!=='N/A'?testData.Poster:"https://via.placeholder.com/400x300"} alt={testData.Title}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
