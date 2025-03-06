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

function App() {


  return (
    <div > <Header />
      <div className='main'>
      <Routes>
        <Route path='/' element={<Home/>}/>
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
    </div>
  )
}

export default App
