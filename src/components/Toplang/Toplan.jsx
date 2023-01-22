import React,{useState} from 'react'
import {MdDarkMode} from 'react-icons/md'
import {MdLightMode} from 'react-icons/md'
import './toplan.css'

const Toplan = () => {
    // const [lang,setlang] = useState('en');
    const [active,setActive] = useState('en');
    const handleClick=()=>{
        const togglebut = document.querySelector('.toggle__button')
        const toggle = document.querySelector('.toggle');
        const all = document.querySelector('body')
        all.classList.toggle('light');
        togglebut.classList.toggle('activeToggle');
        toggle.classList.toggle('activeTog')
        setActive((active)=>!active)
    }
return (
    <div className='container'>
        <div className="toggle__button" onClick={handleClick}>
            <div className="img">
                {active ?<MdLightMode/>:<MdDarkMode/>}
            </div>
        </div>
    </div>)
}
export default Toplan