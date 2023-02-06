import React,{useContext, useEffect, useState} from 'react'
import {ContextLanguage} from './../../components/Context/ContextLanguage'
import './experience.css'
import {GiGraduateCap} from 'react-icons/gi'
import {GiBriefcase} from 'react-icons/gi'
const Experience = () => {
    const [qual,setQual] = useState('experience')
    const {language}=useContext(ContextLanguage)
    const [showAll,setShowAll] = useState({"one":false,"two":false,"three":false,"four":false})
    const handleClickStudies=()=>{
        setQual('studies')
    }
    const handleClickExperience=()=>{
        setQual('experience')
    }
    const handleClickPlus1 = ()=>{
        setShowAll((showAll)=>{
            return {...showAll,"one":!showAll.one}
        })
    }
    const handleClickPlus2= ()=>{
        setShowAll((showAll)=>{
            return {...showAll,"two":!showAll.two}
        })
    }
    const handleClickPlus3 = ()=>{
        setShowAll((showAll)=>{
            return {...showAll,"three":!showAll.three}
        })
    }
    const handleClickPlus4 = ()=>{
        setShowAll((showAll)=>{
            return {...showAll,"four":!showAll.four}
        })
    }
return (
    <div className='container'>
            <div className="titles">
                <div className={qual==='studies' ? 'title notactive' : 'title'} onClick={handleClickExperience}>
                    <GiBriefcase/>
                    {language==='en'
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
                {showAll.one===false
                ?<div className='modules text-light'>
                    - Interfaçes Industriel.<br/>
                    - Automatismes Industriels.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus1}>Plus...</div>
                </div>
                :showAll.one===true
                ?<div className='modules text-light'>
                    - Interfaçes Industriel.<br/>
                    - Automatismes Industriels.<br/>
                    - Automatique Numérique.<br/>
                    - Réseaux et Supervision.<br/>
                    - ERP et gestion de production.<br/>
                    - Gestion des données Industrielles.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus1}>Moins...</div>
                </div>
                :null}
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
                {showAll.two===false
                ?<div className='modules text-light'>
                    - Electronique Numérique.<br/>
                    - Electronique Analogique.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus2}>Plus...</div>
                </div>
                :showAll.two===true
                ?<div className='modules text-light'>
                    - Electronique Numérique.<br/>
                    - Electronique Analogique.<br/>
                    - Théorie et traitement du signal.<br/>
                    - Electrotechnique.<br/>
                    - Optoélectronique.<br/>
                    - Programmation avancée.<br/>
                    - Système d'informations géographique.<br/>
                    - Traitement d'image.<br/>
                    - Antenne et propagation.<br/>
                    - Systèmes d'exploitation.<br/>
                    - Réseau Informatique.<br/>
                    - Théorie de l'information.<br/>
                    - VHDL.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus2}>Moins...</div>
                </div>
                :null}
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
                {showAll.three===false
                ?<div className='modules text-light'>
                    - Intelligence Artificielle.<br/>
                    - Conception d'Asic numérique.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus3}>Plus...</div>
                </div>
                :showAll.three===true
                ?<div className='modules text-light'>
                    - Intelligence Artificielle.<br/>
                    - Conception d'Asic numérique.<br/>
                    - Technologies cartes à puces.<br/>
                    - Internet des Objets.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus3}>Moins...</div>
                </div>
                :null}
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
                {showAll.four===false
                ?<div className='modules text-light'>
                    - Analyse 1,2,3,4.<br/>
                    - Physique 1,2,3,4.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus4}>Plus...</div>
                </div>
                :showAll.four===true
                ?<div className='modules text-light'>
                    - Analyse 1,2,3,4.<br/>
                    - Analyse numérique.<br/>
                    - Physique 1,2,3,4.<br/>
                    - Chimie 1,2,3,4.<br/>
                    - CAO.<br/>
                    - Algébre.<br/>
                    - Probabilité et statistiques.<br/>
                    - Economie.<br/>
                    - Mécanique rationnelle et de fluides.
                    <div className='showAll text-white' onClick={handleClickPlus4}>Moins...</div>
                </div>
                :null}
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
                {showAll.one===false
                ?<div className='modules text-light'>
                    - Interfaçes Industriel.<br/>
                    - Automatismes Industriels.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus1}>Plus...</div>
                </div>
                :showAll.one===true
                ?<div className='modules text-light'>
                    - Interfaçes Industriel.<br/>
                    - Automatismes Industriels.<br/>
                    - Automatique Numérique.<br/>
                    - Réseaux et Supervision.<br/>
                    - ERP et gestion de production.<br/>
                    - Gestion des données Industrielles.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus1}>Moins...</div>
                </div>
                :null}
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
                {showAll.two===false
                ?<div className='modules text-light'>
                    - Electronique Numérique.<br/>
                    - Electronique Analogique.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus2}>Plus...</div>
                </div>
                :showAll.two===true
                ?<div className='modules text-light'>
                    - Electronique Numérique.<br/>
                    - Electronique Analogique.<br/>
                    - Théorie et traitement du signal.<br/>
                    - Electrotechnique.<br/>
                    - Optoélectronique.<br/>
                    - Programmation avancée.<br/>
                    - Système d'informations géographique.<br/>
                    - Traitement d'image.<br/>
                    - Antenne et propagation.<br/>
                    - Systèmes d'exploitation.<br/>
                    - Réseau Informatique.<br/>
                    - Théorie de l'information.<br/>
                    - VHDL.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus2}>Moins...</div>
                </div>
                :null}
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
                {showAll.three===false
                ?<div className='modules text-light'>
                    - Intelligence Artificielle.<br/>
                    - Conception d'Asic numérique.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus3}>Plus...</div>
                </div>
                :showAll.three===true
                ?<div className='modules text-light'>
                    - Intelligence Artificielle.<br/>
                    - Conception d'Asic numérique.<br/>
                    - Technologies cartes à puces.<br/>
                    - Internet des Objets.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus3}>Moins...</div>
                </div>
                :null}
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
                {showAll.four===false
                ?<div className='modules text-light'>
                    - Analyse 1,2,3,4.<br/>
                    - Physique 1,2,3,4.<br/>
                    <div className='showAll text-white' onClick={handleClickPlus4}>Plus...</div>
                </div>
                :showAll.four===true
                ?<div className='modules text-light'>
                    - Analyse 1,2,3,4.<br/>
                    - Analyse numérique.<br/>
                    - Physique 1,2,3,4.<br/>
                    - Chimie 1,2,3,4.<br/>
                    - CAO.<br/>
                    - Algébre.<br/>
                    - Probabilité et statistiques.<br/>
                    - Economie.<br/>
                    - Mécanique rationnelle et de fluides.
                    <div className='showAll text-white' onClick={handleClickPlus4}>Moins...</div>
                </div>
                :null}
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