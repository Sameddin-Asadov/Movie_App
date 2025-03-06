import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBiographyMovies } from '../redux/moviesSlice'
import Body from '../components/Body'


function Biography() {
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getBiographyMovies())
  },[])
  const {responseBiography}=useSelector(store => store.AllBiography)
  return (
    <div>
      {<Body movies={responseBiography} />}
    </div>
  )
}

export default Biography