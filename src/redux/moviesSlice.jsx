import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    movies: [],
}
const getMoviesUrl=(search,type)=>(
   ` http://www.omdbapi.com/?s=${search}&type=${type}&apikey=1faef3e4`
)

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
export const fetchMovies = createAsyncThunk('movies/fetchMovies',
    async ({ search, type }, { rejectWithValue }) => {
        try {
            const response = await axios.get(getMoviesUrl(search, type));
            if (response.data.Response === "True") {
                return response.data.Search || [];
            } else {
                return rejectWithValue(response.data.Error || "Axtarış nəticəsi tapılmadı");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
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