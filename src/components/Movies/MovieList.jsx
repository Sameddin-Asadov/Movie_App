import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Body from '../Body'
import { fetchMovies } from '../../redux/moviesSlice'
function MovieList() {
  
    const { movies } = useSelector(store => store.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        if (movies.length === 0) {  // 🔥 Əgər filmlər boşdursa, API çağırışı et
            const categories = ['adventure', 'action', 'animate', 'biography', 'comedy', 'crime', 'drama', 'fight', 'horror', 'kid', 'war', 'fantasy'];

            Promise.all(categories.map(category =>
                dispatch(fetchMovies({ search: category, type: "movie" })).unwrap()
            ));
        }
    }, [dispatch, movies.length])
    
       console.log(movies)
    return (
        <div>
           <Body movies={movies}/>
        </div>
    )
}

export default MovieList