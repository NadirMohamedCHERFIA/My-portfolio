import React, { useContext } from 'react'
import './header.css'
import CTA from './CTA'
import SocialMedias from './SocialMedias'
import Typewriter from 'typewriter-effect'
import vector from '../../assets/veector.png'
import Portrait from './../../assets/Portrait.png'
import { ContextLanguage } from '../Context/ContextLanguage'
const greeting=
	{
		en:"Hello I'am",
		fr:"Bonjour c'est"
	}
const strings = {
	en:['Embedded Systems Engineer','Industry 4.0 student','FrontEnd developer'],
	fr:["Ingénieur d'état en Systèmes Embarquès","Ètudiant M1 en Génie Insutriel","Developper FrontEnd"]
}
const stage={
	en:"Looking for an Internship",
	fr:"Â la recherche d'un stage"
}
const scroll ={
	en:"Scroll Down",
	fr:'Faire défiler'
}
const Header = () => {
	const {language,setLanguage} = useContext(ContextLanguage)
	const stringToShow = (language==='en' ? strings.en :language==='fr' ? strings.fr : null)
	console.log(stringToShow)
	return (
		<header>
		<div className="container header__container" id='home'>
			<h5>
				{language ==='en' ? greeting.en  : language==='fr' ? greeting.fr : null}
				</h5>
			<h2>N A D I R</h2>
			<div className='maj'>
				<Typewriter
					options={{
						autoStart:true,
						loop:true,
						delay:40,
						strings:stringToShow,
					}}
				/>
			</div>
			<script>
			</script>
			<div className="light-text">
				{/* Ready for work */}
				{language==='en'
				?stage.en:
				language==='fr'
				?stage.fr
				:null
			}
			</div>
			<CTA/>
			<div className="me">
				<img src={Portrait} alt=""/>
			</div>
			<SocialMedias/>
			<div className="scroll__down">
					{language==='en'
				?scroll.en:
				language==='fr'
				?scroll.fr
				:null
			}
				<img src={vector} alt="" />
			</div>
		</div>
		</header>
	)
}
export default Header