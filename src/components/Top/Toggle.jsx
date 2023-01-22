import React,{ useState} from 'react'
import './top.css'
import {MdDarkMode} from 'react-icons/md'
import {MdLightMode} from 'react-icons/md'

const Toggle = (props) => {
    console.log(props)
    const [active,setActive] = useState(false);
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
        <div className="toggle__button" onClick={handleClick}>
            <div className="img">
                {active ?<MdLightMode/>:<MdDarkMode/>}
            </div>
        </div>)
}

export default Toggle