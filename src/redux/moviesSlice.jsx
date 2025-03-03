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
    responseWar: [],
    responseBiography:[],
    responseKids:[],
    responseCrime:[],
    responseAdventure:[],
    responseFantasy:[],
    chechkMovies: [],
}
const checkApi = 'http://www.omdbapi.com/?s=war&apikey=1faef3e4'
const war = 'http://www.omdbapi.com/?s=war&apikey=1faef3e4'
const biography = 'http://www.omdbapi.com/?s=biography&apikey=1faef3e4'
const kids = 'http://www.omdbapi.com/?s=kids&apikey=1faef3e4'
const crime = 'http://www.omdbapi.com/?s=crime&apikey=1faef3e4'
const adventure = 'http://www.omdbapi.com/?s=adventure&apikey=1faef3e4'
const fantasy = 'http://www.omdbapi.com/?s=fantasy&apikey=1faef3e4'
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
export const getWarMovies = createAsyncThunk('AllWar',
    async() =>{
        const responseWarMovies = await axios.get(war)
        return responseWarMovies.data.Search
    }
)
export const getKidsMovies = createAsyncThunk("AllKids",
    async ()=>{
        const responseKidsMovies = await axios.get(kids)
    return responseKidsMovies.data.Search   }
)
export const getBiographyMovies = createAsyncThunk('AllBiography',
    async ()=>{
        const responseBiographyMovies = await axios.get(biography)
        return responseBiographyMovies.data.Search
    }
)
export const getCrimeMovies = createAsyncThunk('AllCrime',
    async()=>{
        const responseCrimeMovies = await axios.get(crime)
        return responseCrimeMovies.data.Search
    }
)
export const getAdventureMovies = createAsyncThunk("AllAdventure",
    async ()=>{
        const responseAdventureMovies= await axios.get(adventure)
        return responseAdventureMovies.data.Search
    }
)
export const getFantasyMovies = createAsyncThunk('AllFantasy',
    async ()=>{
        const responseFantasyMovies = await axios.get(fantasy)
        return responseFantasyMovies.data.Search
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
        builder.addCase(getWarMovies.fulfilled, (state,action)=>{
            state.responseWar =action.payload
        } )
        builder.addCase(getKidsMovies.fulfilled, (state,action)=>{
            state.responseKids = action.payload
        })
        builder.addCase(getAdventureMovies.fulfilled, (state,action)=>{
            state.responseAdventure= action.payload
        })
        builder.addCase(getBiographyMovies.fulfilled, (state,action)=>{
            state.responseBiography= action.payload
        })
        builder.addCase(getCrimeMovies.fulfilled,(state,action)=>{
            state.responseCrime=action.payload
        })
        builder.addCase(getFantasyMovies.fulfilled, (state,action)=>{
            state.responseFantasy=action.payload
        })
    }
})

export const { } = moviesSlice.actions

export default moviesSlice.reducer