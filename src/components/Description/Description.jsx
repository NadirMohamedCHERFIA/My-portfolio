import React,{useContext} from 'react'
import {ContextLanguage} from './../Context/ContextLanguage'
import './description.css'
const aboutme={
  en:"About me",
  fr:"À propos de moi"
}
const description={
  en:"My name is Nadir, student at the university of Lille-France in the major of Industry 4.0,Obtained a Master and an Engineer diplomas in the Embedded Systems major from the Higher Nationl School of Technology in Algiers.<br></br>My main intrests are in the field of the Internet of Things, Machine Learning and web developpement, currently i'm looking for an internship in order to gain more experience, learn new stuffs and get in touch with experienced teams.",
  fr:"Bonjour c'est nadir, étudiant à l'université de Lille dans la spécialité de génie indutriel parcours Industrie 4.0, diplômé de l'Ecole Nationale Supérieur de Technologie -Alger- dans la spécialité d'electronique avec deux diplôme Master2 avec Ingénieur d'état. "
}
const Description = () => {
  const {language} = useContext(ContextLanguage)
  return (
    <div className='container'>
        <fieldset id='about'>
            <legend>
                {language==='en'
                ?aboutme.en
                :language==='fr'
                ?aboutme.fr
                :null
                }
            </legend>
            {language==='en'
            ?<div>
              My name is <span className='blue'> Nadir</span>, student at the university of Lille-France in the major of <span className='blue'> Industry 4.0</span>,Obtained a Master and an Engineer  diplomas in the <span className='blue'> Embedded Systems</span> major from the Higher Nationl School of Technology in Algiers.<br></br>My main intrests are in the field of the Internet of Things, Machine Learning and web developpement, currently i'm looking for an internship in order to gain more experience, learn new stuffs and get in touch with experienced teams.
            </div>
            :language==='fr'
            ?<div>
              Hello c'est <span className='blue'>Nadir</span>, Étudiant en Master 1 <span className='blue'> Génie Industriel parcours industrie 4.0</span> à l'université de Lille,Diplômé en <span className='blue'> électronique de Systèmes Embarqués</span> depuis 2022 de l'École Nationale Supérieure de technologie d'Alger.
              <br></br>
              Intéressé dans le domaine de l'Internet des objets, l'apprentissage automatique et le développement web. Je cherche un stage pour acquérir plus d'expérience, mettre en pratique mes connaissances et surtout découvrir le monde professionnel.
            </div>
            :null
            }
            <div>
            {
            language==='en'
            ?description.en
            :language==='fr'
            ?description.fr
            :null
            }
          </div>
        </fieldset>
    </div>
  )
}

export default Description