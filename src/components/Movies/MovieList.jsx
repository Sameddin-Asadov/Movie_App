import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Body from '../Body'
import { fetchMovies } from '../../redux/moviesSlice'
function MovieList() {

    const dispatch = useDispatch()
    useEffect(() => {
        const categories= ['adventure','action','animate','biography','comedy','crime','drama','fight','horror','kid','war','fantasy']
    Promise.all(categories.map(category =>
        dispatch(fetchMovies({ search: category, type: "movie" })).unwrap()
      ));
 
       }, [dispatch])
      
       const { movies } = useSelector(store => store.movies)
    

    return (
        <div>
           <Body movies={movies}/>
        </div>
    )
}

export default MovieList