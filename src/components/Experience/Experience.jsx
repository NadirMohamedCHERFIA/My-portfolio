import React,{useEffect, useState} from 'react'
import './experience.css'
import {GiGraduateCap} from 'react-icons/gi'
import {GiBriefcase} from 'react-icons/gi'
const Experience = () => {
    const [qual,setQual] = useState('experience')
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
                    Algerie Telecom <br></br>-Internship-
                </div>
                <div className="location text-light">
                    Algeria
                </div>
                <div className="date">
                    2022
                </div>
            </div>
            <div className="child2 showright">
                <div className="name">
                    Groupe GIPLAIT <br></br>-Internship-
                </div>
                <div className="location text-light">
                    Algeria
                </div>
                <div className="date">
                    2022
                </div>
            </div>
            <div className="child3 showleft">
                <div className="name">
                    GAC URAc UAB <br></br>-Internship-
                </div>
                <div className="location text-light" >
                    Algeria
                </div>
                <div className="date">
                    2021
                </div>
            </div>
            <div className="child4 showright">
                <div className="name">
                    BATIMETAL Charpente<br></br> -Internship-
                </div>
                <div className="location text-light" >
                    Algeria
                </div>
                <div className="ldate">
                    2021
                </div> 
            </div>
        </ul>:(qual==='studies')?
            <ul className='navmenu'>
            <div className='child1s showlefts'>
                <div className="name">
                    Master 1 Industry 4.0
                </div>
                <div className="location text-light" >
                    Universty of Lille
                </div>
                <div className="date">
                    2022-2023
                </div>
            </div>
            <div className="child2s showrights">
                <div className="name">
                    Engineer degree in Embedded Systems 
                </div>
                <div className="location text-light">
                    Higher National School of technology
                </div>
                <div className="date">
                    2022
                </div>
            </div>
            <div className="child3s showlefts">
                <div className="name">
                    Master degree in Embedded System
                </div>
                <div className="location text-light">
                    Higher National School of technology
                </div>
                <div className="date">
                    2022
                </div>
            </div>
            <div className="child4s showrights">
                <div className="name">
                    Technical Mathematics baccalaureate
                </div>
                <div className="location text-light">
                    IbnAbdMoutalib High School
                </div>
                <div className="date">
                    2017
                </div>
            </div>
            </ul>:null}
    </div>
  )
}

export default Experience