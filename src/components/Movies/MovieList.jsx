import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkMovieApi, getActionMovies, getAllMovies, getAnime, getComedyMovies, getDramaMovies, getFightMovies, getHorrorMovies } from '../../redux/moviesSlice'
import Movie from './Movie'
import '../../style/Movie.css'
function MovieList() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFightMovies())
        dispatch(getDramaMovies())
        dispatch(getAnime())
        dispatch(getActionMovies())
        dispatch(getHorrorMovies())
        dispatch(getComedyMovies())
        dispatch(checkMovieApi())
    }, [])
    const { responseFight } = useSelector(store => store.AllFight)
    const { responseAction } = useSelector(store => store.AllAction)
    const { responseHorror } = useSelector(store => store.AllHorror)
    const { responseComedy } = useSelector(store => store.AllComedy)
    const { responseAnime } = useSelector(store => store.AllAnime)
    const { responseDrama } = useSelector(store => store.AllDrama)
    // const { chechkMovies } = useSelector(store => store.CheckApi)
    const movies = [...responseFight, ...responseAction, ...responseComedy, ...responseAnime, ...responseDrama, ...responseHorror]



    return (
        <div className='movie-home' >
            {movies && movies.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList