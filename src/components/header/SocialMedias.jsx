import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
const SocialMedias = () => {
  return (
    <div className="social__medias">
        <a href="https://www.linkedin.com/in/cherfia-mohamed-nadir-21709a226/" rel="noreferrer"  target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/NadirMohamedCHERFIA" rel="noreferrer" target="_blank"><FaGithubSquare/></a>
        <a href="#email" rel="noreferrer"><SiGmail/></a>    </div>
  )
}

export default SocialMedias