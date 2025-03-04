import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnime } from '../redux/moviesSlice'
import Body from '../components/Body'

function Animation() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAnime)
  },[])
  const {responseAnime}= useSelector(store => store.AllAnime)
  return (
    <div>
      {<Body movies={responseAnime} />}
    </div>
  )
}

export default Animation