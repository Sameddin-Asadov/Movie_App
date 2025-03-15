import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Adventure() {
  const dispatch = useDispatch()
 useEffect(() => {
        dispatch(fetchMovies({search: "adventure", type: "movie" }))
       
    }, [])
   
    const { movies } = useSelector(store => store.movies)
    console.log(movies)
  return (
    <div>{<Body movies={mevies}/>}</div>
  )
}

export default Adventure