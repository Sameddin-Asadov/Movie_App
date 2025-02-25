
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {


  return (
    <div> <Header />
      <div className='main'>
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
