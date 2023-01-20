import React from 'react'
import './about.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {IoShareSocialOutline} from 'react-icons/io5'
import {AiFillInfoCircle} from 'react-icons/ai'
const About = () => {
  return (
    <div className="container about__container" id='about'>
      <div className="nav__bar">
        <a href="#home" className='nav-item'><AiTwotoneHome/></a>
        <a href="#about" className='nav-item'><AiFillInfoCircle/></a>
        <a href="#contactMe" className='nav-item'><AiFillContacts/></a>
        <a href="#header" className='nav-item'><SiAboutdotme/></a>
        <a href="#header" className='nav-item'><IoShareSocialOutline/></a>
      </div>
    </div>
    )
}

export default About