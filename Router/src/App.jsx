import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Component/Navbar'
import Badge from './Component/Badge'
const App = () => {
  return (
    <div className='base'>
      <Navbar/>
      
      <Routes>
        <Route path='/'  element = {<Home/>} />
        <Route path='/about'  element = {<About/>} />
        <Route path='/contact'  element = {<Contact/>} />

      </Routes>
      
    </div>
  )
}

export default App
