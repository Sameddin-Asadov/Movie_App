import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDramaMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Drama() {
  const dispact = useDispatch()
  useEffect(()=>{
    dispact(getDramaMovies)
  },[])
  const {responseDrama}=useSelector(store=>store.AllDrama)
  return (
    <div>
      {<Body movies={responseDrama}/>}
    </div>
  )
}

export default Drama