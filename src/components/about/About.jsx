import React,{useEffect} from 'react'
import './about.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {AiFillInfoCircle} from 'react-icons/ai'
import {SiMinutemailer} from 'react-icons/si'
import Toggle from '../Top/Toggle'
const About = () => {
    useEffect(()=>{
    
    },[])
  return (
    <div className="container about__container" id='about'>
      <div className="nav__bar">
        {/* <div className="logoNav"> */}
          <a href="#top" className='nav-item'><AiTwotoneHome/></a>
          <a href="#about" className='nav-item'><AiFillInfoCircle/></a>
          <a href="#contactMe" className='nav-item'><SiMinutemailer/></a>
          <a href="#footer" className='nav-item'><SiAboutdotme/></a>
          {/* <a href="#header" className='nav-item'><IoShareSocialOutline/></a> */}
        {/* </div> */}
        {/* <div className="options">
          <Toggle/>
          <Toggle/>
        </div> */}
      </div>
    </div>
    )
}

export default About