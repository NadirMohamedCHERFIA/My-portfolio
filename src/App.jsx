import React, { useState,useMemo } from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Project from './components/ProjectsR/Project'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Smtp from './components/Smtp/Smtp'
import Top from './components/Top/Top'
import Knowledges from './components/Knowledges/Knowledges'
import Description from './components/Description/Description'
import { ContextLanguage } from './components/Context/ContextLanguage'
const App = () => {
  const [menu,setMenu] = useState(true)
  window.onscroll = ()=> {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight -50)) {
          setMenu(false)
          console.log('bottom')
      }else{
        setMenu(true)
      }
  };
  const [language,setLanguage]= useState(localStorage.getItem('language') ? localStorage.getItem('language') :'en')
  localStorage.setItem('language',language)
  const ProviderValue = useMemo(()=>({language,setLanguage}),[language,setLanguage])
  return (
    <ContextLanguage.Provider value={ProviderValue}>  
        <Top/>
        <Header/>
        <Description/>
        {menu ?<About/> : null}
        <Project/>
        <Knowledges/>
        <Experience/>
        <Smtp/> 
        <Footer/>
    </ContextLanguage.Provider>
  )
}

export default App