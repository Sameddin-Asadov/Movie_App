import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovies } from '../redux/moviesSlice'
function MovieDetails() {

  const dispatch = useDispatch()
  useEffect(() => {
    const categories = ['adventure', 'action', 'animate', 'biography', 'comedy', 'crime', 'drama', 'fight', 'horror', 'kid', 'war', 'fantasy']
    Promise.all(categories.map(category =>
      dispatch(fetchMovies({ search: category, type: "movie" })).unwrap()
    ));

  }, [dispatch])

  const { movies } = useSelector(store => store.movies)
  const { imdbID } = useParams()
  console.log(imdbID)
  const movie = movies.find(movie => movie.imdbID === imdbID)
  if (!movie) {
    return <h2>Movie not found...</h2>
  }
  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
    </div>
  )
}

export default MovieDetails