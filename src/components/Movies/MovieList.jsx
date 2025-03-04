import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkMovieApi, getActionMovies, getAdventureMovies, getAllMovies, getAnime, getBiographyMovies, getComedyMovies, getCrimeMovies, getDramaMovies, getFantasyMovies, getFightMovies, getHorrorMovies, getKidsMovies, getWarMovies } from '../../redux/moviesSlice'
import Body from '../Body'
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
        dispatch(getWarMovies())
        dispatch(getKidsMovies())
        dispatch(getBiographyMovies())
        dispatch(getCrimeMovies())
        dispatch(getAdventureMovies())
        dispatch(getFantasyMovies())
    }, [])
    const { responseWar } = useSelector(store => store.AllWar)
    const { responseBiography} = useSelector(store => store.AllBiography)
    const { responseKids} = useSelector(store => store.AllKids)
    const { responseCrime} = useSelector(store => store.AllCrime)
    const { responseAdventure} = useSelector(store => store.AllAdventure)
    const { responseFantasy} = useSelector(store => store.AllFantasy)
    const { responseFight } = useSelector(store => store.AllFight)
    const { responseAction } = useSelector(store => store.AllAction)
    const { responseHorror } = useSelector(store => store.AllHorror)
    const { responseComedy } = useSelector(store => store.AllComedy)
    const { responseAnime } = useSelector(store => store.AllAnime)
    const { responseDrama } = useSelector(store => store.AllDrama)
    const { chechkMovies } = useSelector(store => store.CheckApi)

    const movies = [...responseWar,...responseBiography,...responseKids,...responseCrime,...responseAdventure,...responseFantasy,...responseFight, ...responseAction, ...responseComedy, ...responseAnime, ...responseDrama, ...responseHorror]
    return (
        <div>
           <Body movies={movies}/>
        </div>
    )
}

export default MovieList