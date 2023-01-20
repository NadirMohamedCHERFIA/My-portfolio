import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './project.css'
import Card from './Card';
import Image from './../../assets/main.png'
import PlannerImage from './../../assets/PlannerImg.png'
import WeatherImage from './../../assets/WeatherImage.png'
import IoTImage from './../../assets/IoTImage.png'
const projects=[
{
    id:1,
    name:'Todo List',
    description:'flkzlekflkn knezùkjfùkzne zenklkkjlkjlkjlkjlkfjlekjzlfkjelkjflkejlfjkfje',
    path:PlannerImage,
    ghpage:true,
    link:'https://nadirmohamedcherfia.github.io/Planner/'
},
{
    id:2,
    name:'Weather App',
    description:'flkzlekflkn knezùkjfùkzne zenkjkfje',
    path: WeatherImage,
    ghpage:false,
}
,
{
    id:3,
    name:'IoT Monitoring System',
    description:'flkzlekflkn knezùkjfùkzne zenkjkfje',
    path: IoTImage,
    ghpage:false,
}
]
const Project = () => {
  return (
    <div className="container">
        <div className="title">
            Realised Projects
        </div>
        <div className="carousel">
            <Carousel>
                {projects.map((p)=>
                        <Card props={p}/>
                )}
            </Carousel>
        </div>
    </div>
    )
}

export default Project