import React, { useState } from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Project from './components/ProjectsR/Project'
import Technologies from './components/Technologies/Technologies'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Smtp from './components/Smtp/Smtp'
const App = () => {
  const [menu,setMenu] = useState(true)
  window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          setMenu(false)
          console.log('bottom')
      }else{
        setMenu(true)
      }
  };
  return (
    <>
        <Header/>
        {menu ?<About/> : null}
        <Technologies/>
        <Project/>
        <Experience/>
        <Smtp/> 
        <Footer/>
    </>
  )
}

export default App