import React from 'react'
import './header.css'
import CTA from './CTA'
import image from '../../assets/main2.png'
import SocialMedias from './SocialMedias'
import Typewriter from 'typewriter-effect'
import vector from '../../assets/veector.png'
import Portrait from './../../assets/Portrait.png'
// import typing from './typing.js'
const Header = () => {
	return (
		<header>
		<div className="container header__container" id='home'>
			<h5>Hello I'am</h5>
			<h2>N A D I R</h2>
			<div className='maj'>
				<Typewriter
					options={{
						autoStart:true,
						loop:true,
						delay:40,
						strings:[
							"Embedded Systems Engineer",
							"Industry 4.0 student",
							"FrontEnd developer"
							],
					}}
				/>
			</div>
			<script>
			</script>
			<div className="light-text">
				{/* Ready for work */}
				Looking for an internship
			</div>
			<CTA/>
			<div className="me">
				<img src={Portrait} alt=""/>
			</div>
			<SocialMedias/>
			<div className="scroll__down">
				Scroll Down
				<img src={vector} alt="" />
			</div>
		</div>
		</header>
	)
}
export default Header