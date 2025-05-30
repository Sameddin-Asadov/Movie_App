import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Action  from './pages/Action' 
import Animation  from './pages/Animation' 
import Adventure from './pages/Adventure' 
import BiographyPage from './pages/BiographyPage' 
import Comedy from './pages/Comedy' 
import Crime from './pages/Crime' 
import Drama from './pages/Drama' 
import Fantasy from './pages/Fantasy' 
import Fight from './pages/Fight' 
import Horror from './pages/Horror' 
import Kids from './pages/Kids' 
import War from './pages/War' 
import { MyContext } from './Context'
import { useState } from 'react'
import Search from './pages/Search'
import MovieDetails from './pages/MovieDetails'
function App() {

  const[ inputValue,setInputValue]=useState('')
  const [clickSearch,setClickSearch]=useState('')

const data ={inputValue,setInputValue,clickSearch,setClickSearch}

  return (
    <MyContext.Provider value ={data} > 
    <Header />
      <div className='main'>
        <Search/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/movie-details/:imdbID'  element={<MovieDetails/>}/>
               <Route path='/action' element={<Action/>}  />
               <Route path='/adventure' element={<Adventure/>}  />
               <Route path='/animation' element={<Animation/>}  />
               <Route path='/biography' element={<BiographyPage/>}  />
               <Route path='/comedy' element={<Comedy/>}  />
               <Route path='/drama' element={<Drama/>}  />
               <Route path='/crime' element={<Crime/>}  />
               <Route path='/fantasy' element={<Fantasy/>}  />
               <Route path='/fight' element={<Fight/>}  />
               <Route path='/horror' element={<Horror/>}  />
               <Route path='/kids' element={<Kids/>}  />
               <Route path='/war' element={<War/>}  />
        </Routes>
      </div>
      <Footer />
      <div>
      
      </div>
    </MyContext.Provider>
  )
}

export default App
