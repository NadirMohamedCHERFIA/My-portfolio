import React from 'react'
import './project.css'
const Card = (props) => {
  return (
    <div className='SliderCard'>
        <div className="name">
            {props.props.name}
        </div>
        <div className="img">
            <img src={props.props.path} alt=""/>
        </div>
        <div className="description">
            {props.props.description}
        {props.props.ghpage ? 
        <a href={props.props.link} target='_blank'>
          <div className="btn btn-primary">Demo</div>
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