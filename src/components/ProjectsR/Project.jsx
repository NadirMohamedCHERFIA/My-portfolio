import React,{useState} from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './project.css'
import Card from './Card';
import PlannerImage from './../../assets/PlannerImg.png'
import WeatherImage from './../../assets/WeatherImage.png'
import IoTImage from './../../assets/IoTImage.png'
import mqttImage from './../../assets/MQTT.jpg'
import participationImage from './../../assets/participation.jpg'
import articleImage from './../../assets/article.png'
import Article from './../../assets/version_15_octobre.pdf'
const projects=[
    {
        id:1,
        name:'Weather App',
        description:'A weather app that show the température, windspeed and wind direction.You can choose a city from the available ones in the list or simpily click on the location icon to get the current position weather. In addition to that you can see a chart for the forcast data for the upcoming 6 days with the posibility to chose the data you want to display.',
        path: WeatherImage,
        ghpage:true,
        link:'https://nadirmohamedcherfia.github.io/Weather-App/'
    },
{
    id:2,
    name:'Todo List',
    description:'A simple Todo list which uses localStorage to store data in with the possibility to add or remove tasks and mark them as finished when you are done.',
    path:PlannerImage,
    ghpage:true,
    link:'https://nadirmohamedcherfia.github.io/Planner/'
},

{
    id:3,
    name:'IoT Monitoring System',
    description:'An interface build with nodered based on Angular js , receives data from an mqtt broker and displays it throw gauges and get stored data from a database to display it in charts.',
    path: IoTImage,
    ghpage:false,
}
,
{
    id:4,
    name:'IoT device for air quality monitoring',
    description:'An IoT device based on an ESP32 boards and sensors, uses MQTT protocole to send data to the broker (Raspberry pi) which will be stored in a mysql database and sent to front end interface to displays it.',
    path: mqttImage,
    ghpage:false,
}
,
{
    id:5,
    name:'Study and Comparaison of machine learning models for air PM2.5 concentration prediction ',
    description:"Comparative study between different AI prediction models is presented: BidirectionalLong Short-Term Memory (Bi-LSTM), Time Distributed Convolutional Neural Network (CNN), and a hybrid model combining both CNN and Bi-LSTM. with several architectures for the different models: Multi Inputs – Multi Outputs,Multi Inputs - Single Output and the univariate.",
    path: articleImage,
    ghpage:false,
    download:true,
    downloadPath:Article
},
{
    id:6,
    name:'Participation in the fifth International Symposium on Informatics and its Applications (ISIA 2022) ',
    description:'Participation in the ISIA 2022 as a co-author with an article intitled : Study and Comparaison of machine learning models for air PM2.5 concentration prediction ',
    path: participationImage,
    ghpage:false,
}
]
const Project = () => {
    const [project,setProject]=useState(1)
  return (
    <div className="container">
        <div className="title">
            Realised Projects
        </div>
        <div className="carousel">
            <Carousel  showThumbs={false}>
                {projects.map((p)=>
                                <Card props={p}/>
                )}

            </Carousel>
        </div>
    </div>
    )
}

export default Project