import React,{useContext} from 'react'
import CV from './../../assets/curriculum vitae_fr.pdf'
import { ContextLanguage } from '../Context/ContextLanguage'
const download ={
  en:"Download CV",
  fr:'Télécharger le CV'
}
const talk={
  en:"let's talk",
  fr:"Contacte moi"
}
const CTA = () => {
  const {language} = useContext(ContextLanguage)
  return (
    <div className="cta">
        <a href={CV} download className='btn'>
          {language==='en'
          ?download.en
          :language==='fr'
          ?download.fr
          :null
          }
        </a>
        <a href="#contactMe" className='btn btn-primary'>
          {language==='en'
          ?talk.en
          :language==='fr'
          ?talk.fr
          :null
          }
        </a>
    </div>
  )
}

export default CTA