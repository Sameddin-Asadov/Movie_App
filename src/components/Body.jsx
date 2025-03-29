import React from 'react'
import Movie from './Movies/Movie'
import '../style/Movie.css'

function Body({ movies }) {

  return (
    <div className='movie-home'>

      {movies &&
        movies
          .filter((movie) => movie.Poster !== 'N/A')
          .map((movie) => <Movie key={movie.imdbID} movie={movie} />)
      }
    </div>
  )
}

export default Body