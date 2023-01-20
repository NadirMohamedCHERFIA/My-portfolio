import React,{useState} from 'react'
import './experience.css'
import {GiGraduateCap} from 'react-icons/gi'
import {GiBriefcase} from 'react-icons/gi'
const Experience = () => {
    const [qual,setQual] = useState('experience')
    const [animation,setAnimation]=useState(true)
    const handleClickStudies=()=>{
        setQual('studies')
    }
    const handleClickExperience=()=>{
        setQual('experience')
    }
  return (
    <div className='container'>
            <div className="titles">
                <div className={qual==='studies' ? 'title notactive' : 'title'} onClick={handleClickExperience}>
                    <GiBriefcase/> Experience
                </div>
                <div className={qual==='experience' ? 'title notactive' : 'title'} onClick={handleClickStudies}>
                    <GiGraduateCap/> Studies
                </div>
            </div>
            {(qual==='experience')?
        <ul className='navmenu'>
            <div className='child1 showleft'>
                <div className="name">
                    Algerie Telecom
                </div>
                <div className="location">
                    Algeria
                </div>
                <div className="location">
                    2022
                </div>
            </div>
            <div className="child2 showright">
                <div className="name">
                    Algerie Telecom
                </div>
                <div className="location">
                    Algeria
                </div>
                <div className="location">
                    2022
                </div>
            </div>
            <div className="child3 showleft">
                <div className="name">
                    Algerie Telecom
                </div>
                <div className="location">
                    Algeria
                </div>
                <div className="location">
                    2022
                </div>
            </div>
            <div className="child4 showright">
                <div className="name">
                    Algerie Telecom
                </div>
                <div className="location">
                    Algeria
                </div>
                <div className="location">
                    2022
                </div> 
            </div>
        </ul>:(qual==='studies')?
            <ul className='navmenu'>
            <div className='child1'>
                <div className="name">
                    Engineer degree in Embedded Systems
                </div>
                <div className="location">
                    HIgher National School of Technologie
                </div>
                <div className="location">
                    2022
                </div>
            </div>
            <div className="child2">
                <div className="name">
                    Master degree in Embedded System 
                </div>
                <div className="location">
                    Higher National School of technology
                </div>
                <div className="location">
                    2022
                </div>
            </div>
            <div className="child3">
                <div className="name">
                    BAC Technical Mathematics
                </div>
                <div className="location">
                    Lycée IbnAbdMoutalib
                </div>
                <div className="location">
                    2017
                </div>
            </div>
            </ul>:null}
    </div>
  )
}

export default Experience