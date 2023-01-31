import React from 'react'
import './project.css'
import { ContextLanguage } from '../Context/ContextLanguage'
import { useContext } from 'react'
const Card = (props) => {
  const {language} = useContext(ContextLanguage)
  return (
    <div className='SliderCard'>
        <div className="name">
            {language==='en'
            ?props.props.nameEn
            :language==='fr'
            ?props.props.nameFr
            :null}
        </div>
        <div className="img">
            <img src={props.props.path} alt=""/>
        </div>
        <div className="description">
            {language==='en'
            ?props.props.descriptionEn
            :language==='fr'
            ?props.props.descriptionFr
            :null}
        {props.props.ghpage ? 
        <a href={props.props.link} target='_blank'>
          <div className="btn btn-primary">Live Demo</div>
        </a>
        :null
      }
      {
        props.props.download ?
        <a href={props.props.downloadPath}>
          <div className="btn btn-primary">Download article</div>
        </a>:null
      }
        </div>
    </div>
  )
}

export default Card