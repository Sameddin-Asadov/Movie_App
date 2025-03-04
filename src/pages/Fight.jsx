import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFightMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Fight() {
  const dispact = useDispatch()
  useEffect(()=>{
    dispact(getFightMovies)
  },[])
  const { responseFight} = useSelector(store=>store.AllFight)
  return (
    <div>
      {<Body movies={ responseFight}/>}
    </div>
  )
}

export default Fight