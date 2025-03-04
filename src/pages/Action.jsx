import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActionMovies } from '../redux/moviesSlice'
import Body from '../components/Body' 
function Action() {
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getActionMovies())
},[])
  const { responseAction } = useSelector(store => store.AllAction)
  return (
    <div>
      <Body movies={responseAction}/>
     
    </div>
  )
}

export default Action