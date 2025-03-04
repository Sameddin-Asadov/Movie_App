import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComedyMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Comedy() {
  const dispatc = useDispatch()
  useEffect(()=>{
    dispatc(getComedyMovies())
  },[])
  const {responseComedy}= useSelector(store => store.AllComedy)
  return (
    <div>
      { <Body movies={responseComedy} /> }</div>
  )
}

export default Comedy