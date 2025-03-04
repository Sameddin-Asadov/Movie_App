import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCrimeMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Crime() {
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getCrimeMovies)
  },[])
  const {responseCrime}= useSelector(store => store.AllCrime)
  return (
    <div>
      {<Body movies={responseCrime}/>}
    </div>
  )
}

export default Crime