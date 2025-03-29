import React from 'react'
import '../../style/Movie.css'
import { useNavigate } from 'react-router-dom';
function Movie({ movie}) {
    const { Poster, Title, Year, Type, imdbID } =  movie 
   
    const navigate = useNavigate()
    return (
        <div >
            <div key={imdbID} onClick={() =>  navigate("/movie-details/" + imdbID) } className="card">
                <img src={Poster} className='card-image' alt={Title} />
                <div className="title">{Title}</div>
            </div>     
        </div >
    )
}

export default Movie


