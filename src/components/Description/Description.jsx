import React,{useContext} from 'react'
import './description.css'
import { ContextLanguage  } from '../Context/ContextLanguage'
const description={
  en:"My name is Nadir, student at the university of Lille-France in the major of Industry 4.0,Obtained a Master and an Engineer diplomas in the Embedded Systems major from the Higher Nationl School of Technology in Algiers.<br></br>My main intrests are in the field of the Internet of Things, Machine Learning and web developpement, currently i'm looking for an internship in order to gain more experience, learn new stuffs and get in touch with experienced teams.",
  fr:"Bonjour c'est nadir, étudiant à l'université de Lille dans la spécialité de génie indutriel parcours Industrie 4.0, diplômé de l'Ecole Nationale Supérieur de Technologie -Alger- dans la spécialité d'electronique avec deux diplôme Master2 avec Ingénieur d'état. "
}
const Description = () => {
  const {language,setLanguage} = useContext(ContextLanguage)
  return (
    <div className='container'>
        <fieldset id='about'>
            <legend>
                About me
            </legend>
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