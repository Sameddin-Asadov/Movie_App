import React, { useContext, useEffect } from 'react'
import { MyContext } from '../Context'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Search() {


    const {clickSearch}= useContext(MyContext)
    const dispatch =useDispatch()
    const {movies}=useSelector((store) => store.movies)

    useEffect(()=>{
        clickSearch && dispatch(fetchMovies({search:clickSearch,type:'movies'}))
       
    },[dispatch,clickSearch])


  return (
    <div>
        <Body  movies={ movies} />
    </div>
  )
}

export default Search