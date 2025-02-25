import { configureStore } from '@reduxjs/toolkit'
import moviesRedux from '../redux/moviesSlice'
import FightRedux from '../redux/moviesSlice'
import DramaRedux from '../redux/moviesSlice'
import ComedyRedux from '../redux/moviesSlice'
import AnimeRedux from '../redux/moviesSlice'
import ActionRedux from '../redux/moviesSlice'
import HorrorRedux from '../redux/moviesSlice'
import CheckRedux from '../redux/moviesSlice'





export const store = configureStore({
    reducer: {
        movies: moviesRedux,
        AllFight: FightRedux,
        AllDrama: DramaRedux,
        AllComedy: ComedyRedux,
        AllAnime: AnimeRedux,
        AllAction: ActionRedux,
        AllHorror: HorrorRedux,
        CheckApi: CheckRedux
    }
})