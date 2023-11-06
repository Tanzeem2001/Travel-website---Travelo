import React, {useEffect} from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Recommend from './components/Recommend'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import scrollreveal from "scrollreveal"
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
})
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  )
}
