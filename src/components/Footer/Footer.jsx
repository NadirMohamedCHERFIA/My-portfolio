import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {BsChevronDoubleDown} from 'react-icons/bs'
import {ContextLanguage} from '../Context/ContextLanguage'
import './footer.css'
import {AiOutlineHeart} from 'react-icons/ai'
import { useContext } from 'react'
const Footer = () => {
  const {language} = useContext(ContextLanguage)
  return (
    <div className='footer' id='footer'>
      <div className="footer__container container">
        <div className="footer__element">
          <div className="title">
            {language==='en'
            ?"Location"
            :language==='fr'
            ?"Adresse"
            :null
            }
          </div>
          <div className="subtitle">
            Lille  <br></br>   France
          </div>
        </div>
        <div className="footer__element">
          <div className="title">
            Email
          </div>
          <div className="subtitle" id='email'>
            mohamednadir.cherfia@gmail.com
          </div>
        </div>
        <div className="footer__element">
          <div className="title">
            {language==='en'
            ?"AROUND THE WEB"
            :language==='fr'
            ?"RETROUVEZ MOI SUR"
            :null
            }
          </div>
          <div className="subtitle">
            <div className="logos">
              <a href="https://www.linkedin.com/in/cherfia-mohamed-nadir-21709a226/" rel="noreferrer"  target="_blank"><FaLinkedin/></a>
              <a href="https://github.com/NadirMohamedCHERFIA" rel="noreferrer" target="_blank"><FaGithubSquare/></a>
              <a href="#email" rel="noreferrer"><SiGmail/></a>
            </div>
          </div>
        </div>
        <div className="footer__element">
          <div className="title">
            Quote
          </div>
          <div className="subtitle">
            “Real courage is when you know you’re licked before you begin, but you begin anyway and see it through no matter what.”
          </div>
        </div>
        <div className="footer__element">
            <div style={{color:'grey'}} className='copyrights'>
              &copy; Copyright 2023 Cherfia Mohamed Nadir 
              <div className='developped'>Developped by <span className='blue'><AiOutlineHeart/></span> Nadir</div>
            </div>
        </div>
        <a href="#root">
            <div className="go__up">
            <BsChevronDoubleDown/>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Footer