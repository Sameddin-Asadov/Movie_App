import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Body from '../components/Body'
import { fetchMovies } from '../redux/moviesSlice'

function Animation() {
  const dispatch = useDispatch()
   useEffect(() => {
          dispatch(fetchMovies({search: "animation", type: "movie" }))
         
      }, [])
     
      const { movies } = useSelector(store => store.movies)
  return (
    <div>
      {<Body movies={movies} />}
    </div>
  )
}

export default Animation