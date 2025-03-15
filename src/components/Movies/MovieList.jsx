import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Body from '../Body'
import { fetchMovies } from '../../redux/moviesSlice'
function MovieList() {

    const dispatch = useDispatch()
    useEffect(() => {
           dispatch(fetchMovies({search: "war", type: "movie" }))
          
       }, [])
      
       const { movies } = useSelector(store => store.movies)
       console.log(movies)

    return (
        <div>
           <Body movies={movies}/>
        </div>
    )
}

export default MovieList