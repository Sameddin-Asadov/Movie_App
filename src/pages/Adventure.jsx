import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdventureMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Adventure() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAdventureMovies())
  },[])
  const {responseAdventure}= useSelector(store =>store.AllAdventure)
  return (
    <div>{<Body movies={responseAdventure}/>}</div>
  )
}

export default Adventure