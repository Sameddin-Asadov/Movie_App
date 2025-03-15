import { configureStore } from '@reduxjs/toolkit'
import moviesRedux from '../redux/moviesSlice'
export const store = configureStore({
    reducer: {
        movies: moviesRedux,
    }
})