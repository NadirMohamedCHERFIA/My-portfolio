import React from 'react'
import './project.css'
const Card = (props) => {
  return (
    <div className='SliderCard'>
        <div className="name">
            {props.props.name}
        </div>
        <div className="img">
            <img src={props.props.path} alt="" />
        </div>
        <div className="description">
            Details:<br></br>
            {props.props.description}
        {props.props.ghpage ? 
        <a href={props.props.link} target='_blank'>
          <div className="btn btn-primary">Demo</div>
        </a>
        :null
      }
        </div>
    </div>
  )
}

export default Card