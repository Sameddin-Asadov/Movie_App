import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHorrorMovies } from '../redux/moviesSlice'
import Body from '../components/Body'

function Horror() {
  const dispact = useDispatch()
  useEffect(()=>{
    dispact(getHorrorMovies)
  },[])
  const { responseHorror} = useSelector(store => store.AllHorror)
  return (
    <div>
      {<Body movies={ responseHorror}/>}
    </div>
  )
}

export default Horror