import React from 'react'
import AboutItem from './components/AboutItem'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutItemBody from './components/AboutItemBody'
import Button from './components/Button'
import HomeLeft from './components/HomeLeft'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Skills from './components/Skills'


function App() {


  
  return (
    <>
    <div className='main-container'>
      <Navbar />
      <Home />
    </div> 
    
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
