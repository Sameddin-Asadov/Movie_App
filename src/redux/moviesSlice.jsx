import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    movies: [],
}
const getMoviesUrl=(search,type)=>(
   ` http://www.omdbapi.com/?s=${search}&type=${type}&apikey=1faef3e4`
)
const allSeries = getMoviesUrl('all','movie')
const war = getMoviesUrl('war','movie')
const biography = getMoviesUrl('biography','movie')
const kids = getMoviesUrl('kids','movie')
const crime = getMoviesUrl('crime','movie')
const adventure = getMoviesUrl('adventure','movie')
const fantasy = getMoviesUrl('fantasy','movie')
const ComedyMovies = getMoviesUrl('comedy','movie')
const action = getMoviesUrl('action','movie')
const drama = getMoviesUrl('drama','movie')
const anime = getMoviesUrl('animation','movie')
const fight = getMoviesUrl('fight','movie')
const horror = getMoviesUrl('horror','movie')
export const menuChildren=[{text:'Action',to:"/action"},
    {text:'Adventure',to:"/adventure"},
    {text:'Animation',to:"/animation"},
    {text:'Biography',to:"/biography"},
    {text:'Comedy',to:"/comedy"},
    {text:'Crime',to:"/crime"},
    {text:'Drama',to:"/drama"},
    {text:'Fantasy',to:"/fantasy"},
    {text:'Fight',to:"/fight"},
    {text:'Horror',to:"/horror"},
    {text:'Kids',to:"/kids"},
    {text:'War',to:"/war"},
   ]
export const fetchMovies = createAsyncThunk('movies',
    async ({search,type}) => {
        const response = await axios.get(getMoviesUrl(search,type))
        return response.data.Search || []
    }
)
export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies =[...state.movies, ...action.payload]
        });
    }
})

export const { } = moviesSlice.actions

export default moviesSlice.reducer