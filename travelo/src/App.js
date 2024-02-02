import React, {useEffect} from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Recommend from './components/Recommend'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import scrollreveal from "scrollreveal"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
export default function App() {
useEffect(() => {
  const sr = scrollreveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  })
  sr.reveal(
    `
    nav,
    #hero,
    #services,
    #recommend,
    #testimonials,
    #footer`,
    {
      opacity: 0,
      internal: 300,
    }
  )
},[]);
  return (
    <Router>
      <div className='App'>
      <Navbar />
       <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/hero' element = {<Home />}/>
        <Route path='/services' element = {<Services />}/>
        <Route path='/recommend' element = {<Recommend />}/>
        <Route path='/testimonials' element = {<Testimonials />}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/>
       </Routes>
      <ScrollToTop />
      <Footer />
      </div>
    </Router>
  )
}
