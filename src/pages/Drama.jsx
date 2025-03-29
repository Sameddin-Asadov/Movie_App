import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Drama() {
  const dispatch = useDispatch()
   useEffect(() => {
          dispatch(fetchMovies({search: "drama", type: "movie" }))
         
      }, [dispatch])
     
      const { movies } = useSelector(store => store.movies)
  return (
    <div>
      {<Body movies={movies}/>}
    </div>
  )
}

export default Drama