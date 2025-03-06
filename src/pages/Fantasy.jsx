import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFantasyMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Fantasy() {
  const dispact = useDispatch()
  useEffect(()=>{
    dispact(getFantasyMovies())
  },[])
  const {responseFantasy}=useSelector(store=>store.AllFantasy)
  return (
    <div>
      {<Body movies={responseFantasy}/>}
    </div>
  )
}

export default Fantasy