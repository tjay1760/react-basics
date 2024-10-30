import React from "react";
const MovieCard = ({testData})=>{
return(
    <div className="movie">
    <div className="">
      <p>{testData.Year}</p>
    </div>
    <div>
      <img src ={testData.Poster!=='N/A'?testData.Poster:"https://via.placeholder.com/400x300"} alt={testData.Title}/>
    </div>
    <div>
      <span>{testData.Type}</span>
      <h3>{testData.Title}</h3>
    </div>
  </div>
)
}
export default MovieCard;