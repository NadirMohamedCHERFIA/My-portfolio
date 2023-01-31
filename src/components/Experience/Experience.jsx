import React,{useContext, useEffect, useState} from 'react'
import {ContextLanguage} from './../../components/Context/ContextLanguage'
import './experience.css'
import {GiGraduateCap} from 'react-icons/gi'
import {GiBriefcase} from 'react-icons/gi'
const Experience = () => {
    const [qual,setQual] = useState('experience')
    const {language}=useContext(ContextLanguage)
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
                    <GiBriefcase/>
                    {language==='En'
                    ?"Experience"
                    :language==='fr'
                    ?"Expérience"
                    :null
                    }
                </div>
                <div className={qual==='experience' ? 'title notactive' : 'title'} onClick={handleClickStudies}>
                    <GiGraduateCap/>
                    {language==='en'
                    ?"Studies"
                    :language==='fr'
                    ?"Formation"
                    :null
                    }
                </div>
            </div>
            {(qual==='experience' && language==='en')?
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
                    GAC URAC UAB <br></br>-Internship-
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
        </ul>:(qual==='studies' && language==='en')?
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
                    Competition for grand schools access
                </div>
                <div className="location text-light">
                    Higher National School Of Technology
                </div>
                <div className="date">
                    2019
                </div>
            </div>
            <div className="child5s showlefts">
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
                        {(qual==='experience' && language==='fr')?
        <ul className='navmenu'>
            <div className='child1 showleft'>
                <div className="name">
                    Algérie Télécom <br></br>-Stage-
                </div>
                <div className="location text-light">
                    Algérie
                </div>
                <div className="date">
                    2022
                </div>
            </div>
            <div className="child2 showright">
                <div className="name">
                    Groupe GIPLAIT <br></br>-Stage-
                </div>
                <div className="location text-light">
                    Algérie
                </div>
                <div className="date">
                    2022
                </div>
            </div>
            <div className="child3 showleft">
                <div className="name">
                    GAC URAC UAB <br></br>-Stage-
                </div>
                <div className="location text-light" >
                    Algérie
                </div>
                <div className="date">
                    2021
                </div>
            </div>
            <div className="child4 showright">
                <div className="name">
                    BATIMETAL Charpente<br></br> -Stage-
                </div>
                <div className="location text-light" >
                    Algérie
                </div>
                <div className="ldate">
                    2021
                </div> 
            </div>
        </ul>:(qual==='studies' && language==='fr')?
            <ul className='navmenu'>
            <div className='child1s showlefts'>
                <div className="name">
                    Master 1 Industrie 4.0
                </div>
                <div className="location text-light" >
                    Universté de Lille
                </div>
                <div className="date">
                    2022-2023
                </div>
            </div>
            <div className="child2s showrights">
                <div className="name">
                    Ingénieur en Systèmes Embarqués
                </div>
                <div className="location text-light">
                    Ecole Nationale Supérieur de Technologie.
                </div>
                <div className="date">
                    2022
                </div>
            </div>
            <div className="child3s showlefts">
                <div className="name">
                    Master 2 en Systèmes Embarqués
                </div>
                <div className="location text-light">
                    Ecole Nationale Supérieur de Technologie
                </div>
                <div className="date">
                    2022
                </div>
            </div>
            <div className="child4s showrights">
                <div className="name">
                    Concours d'accès aux grandes écoles
                </div>
                <div className="location text-light">
                    Ecole Nationale Supérieur de Technologie
                </div>
                <div className="date">
                    2019
                </div>
            </div>
            <div className="child5s showlefts">
                <div className="name">
                    Baccalauréat série Math Technique
                </div>
                <div className="location text-light">
                    Lycée IbnAbdMoutalib
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