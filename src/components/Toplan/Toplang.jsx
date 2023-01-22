import React,{useContext, useState} from 'react'
import './toplan.css'
import English from './../../assets/English.png'
import Frensh from './../../assets/Frensh.png'
import { ContextLanguage } from '../Context/ContextLanguage'
const Toplang = () => {
const [active,setActive] = useState(localStorage.getItem('langActive') ?localStorage.getItem('langActive'): false );
localStorage.setItem('langActive',active)
const {language,setLanguage} = useContext(ContextLanguage)
const handleClick=()=>{
    const togglebut = document.querySelector('.togglelan__button')
    const toggle = document.querySelector('.togglelan');
    togglebut.classList.toggle('activeTogglelan');
    toggle.classList.toggle('activeToglan')
    setActive((active)=>!active)
}
active ? setLanguage((language)=>'fr') : setLanguage((language)=>'en')
return (
    <div className="togglelan">

    <div className="togglelan__button" onClick={handleClick}>
        <div className="imglan">
            {active
            ?<img src={Frensh} alt="" />
            :<img src={English} alt="" />}
        </div>
    </div>
    </div>)
}

export default Toplang