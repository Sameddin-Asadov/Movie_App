import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWarMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function War() {
  const dispact = useDispatch()
  useEffect(()=>{
    dispact(getWarMovies)
  },[])
  const {responseWar}=useSelector(store=>store.AllWar)
  return (
    <div>
      {<Body movies={responseWar}/>}
    </div>
  )
}

export default War