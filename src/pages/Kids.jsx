import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getKidsMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Kids() {
  const dispact = useDispatch()
  useEffect(()=>{
    dispact(getKidsMovies)
  },[])
  const {responseKids}= useSelector(store =>store.AllKids)
  return (
    <div>
      {<Body movies={responseKids}/>}</div>
  )
}

export default Kids