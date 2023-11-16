import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Hero from './views/Hero';
import About from './views/About';
import Games from './views/Games';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/games' element={<Games />} />
      </Routes>
      <Footer/>
    </Router>
  )
}