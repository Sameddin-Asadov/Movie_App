import React from 'react'
import Movie from './Movies/Movie'
import '../style/Movie.css'
function Body({movies}) {
  return (
    <div className='movie-home'> {movies && movies.map((movie) => (
        movie.Poster !=='N/A'? <Movie key={movie.imdbID} movie={movie} />: console.log('undifined') ))}</div>
  )
}

export default Body