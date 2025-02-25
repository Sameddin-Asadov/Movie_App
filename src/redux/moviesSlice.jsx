import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    movies: [],
    responseFight: [],
    responseAction: [],
    responseHorror: [],
    responseComedy: [],
    responseAnime: [],
    responseDrama: [],
    chechkMovies: []
}
const checkApi = 'http://www.omdbapi.com/?&type=movie&apikey=1faef3e4'
const ComedyMovies = 'http://www.omdbapi.com/?s=comedy&apikey=1faef3e4'
const action = 'http://www.omdbapi.com/?s=action&y=2024&type=series&apikey=1faef3e4'
const drama = 'http://www.omdbapi.com/?s=drama&y=2024&type=series&apikey=1faef3e4'
const anime = 'http://www.omdbapi.com/?s=anime&y=2024&type=series&apikey=1faef3e4'
const fight = 'http://www.omdbapi.com/?s=fight&y=2024&type=series&apikey=1faef3e4'
const horror = 'http://www.omdbapi.com/?s=horror&type=movie&apikey=1faef3e4'

export const checkMovieApi = createAsyncThunk('CheckApi',
    async () => {
        const checkMovie = await axios.get(checkApi)
        return checkMovie.data.Search
    }
)
export const getAllMovies = createAsyncThunk('movies',
    async (baseUrl) => {
        const response = await axios.get(baseUrl)
        return (response.data.Search)
    }
)
export const getFightMovies = createAsyncThunk('AllFight',
    async () => {
        const responseFightMovies = await axios.get(fight)
        return (responseFightMovies.data.Search)
    }
)
export const getDramaMovies = createAsyncThunk('AllDrama',
    async () => {
        const responseDramaMovies = await axios.get(drama)
        return (responseDramaMovies.data.Search)
    })
export const getComedyMovies = createAsyncThunk('AllComedy',
    async () => {
        const responseComedyMovies = await axios.get(ComedyMovies)
        return (responseComedyMovies.data.Search)
    })
export const getAnime = createAsyncThunk('AllAnime',
    async () => {
        const allAnime = await axios.get(anime)
        return (allAnime.data.Search)
    })
export const getActionMovies = createAsyncThunk('AllAction',
    async () => {
        const responseAction = await axios.get(action)
        return (responseAction.data.Search)
    }
)
export const getHorrorMovies = createAsyncThunk('AllHorror',
    async () => {
        const allHorror = await axios.get(horror)
        return allHorror.data.Search
    }
)
export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.movies = action.payload
        });
        builder.addCase(getFightMovies.fulfilled, (state, action) => {
            state.responseFight = action.payload
        });
        builder.addCase(getDramaMovies.fulfilled, (state, action) => {
            state.responseDrama = action.payload
        });
        builder.addCase(getComedyMovies.fulfilled, (state, action) => {
            state.responseComedy = action.payload
        })
        builder.addCase(getAnime.fulfilled, (state, action) => {
            state.responseAnime = action.payload
        })
        builder.addCase(getActionMovies.fulfilled, (state, action) => {
            state.responseAction = action.payload
        })
        builder.addCase(getHorrorMovies.fulfilled, (state, action) => {
            state.responseHorror = action.payload
        })
        builder.addCase(checkMovieApi.fulfilled, (state, action) => {
            state.chechkMovies = action.payload
        })
    }
})

export const { } = moviesSlice.actions

export default moviesSlice.reducer