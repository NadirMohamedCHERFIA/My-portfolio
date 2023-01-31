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
import MotusImage from './../../assets/MotusImg.png'
import articleImage from './../../assets/article.png'
import Article from './../../assets/version_15_octobre.pdf'
import { ContextLanguage } from '../Context/ContextLanguage';
import { useContext } from 'react';
const projects=[
    {
        id:1,
        nameEn:'Weather App',
        nameFr:"Application météo",
        descriptionEn:'A weather app that show the température, windspeed and wind direction.You can choose a city from the available ones in the list or simpily click on the location icon to get the current position weather. In addition to that you can see a chart for the forcast data for the upcoming 6 days with the posibility to chose the data you want to display.',
        descriptionFr:"Une application météo qui montre la température, la vitesse du vent et la direction du vent. Vous pouvez choisir une ville parmi celles disponibles dans la liste ou cliquez sur l’icône de localisation pour obtenir la météo actuelle. En plus de cela, vous pouvez voir un graphique pour les données prévues pour les 6 prochains jours avec la possibilité de choisir les données que vous voulez afficher.",
        path: WeatherImage,
        ghpage:true,
        link:'https://nadirmohamedcherfia.github.io/Weather-App/'
    },
{
    id:2,
    nameEn:'Todo List',
    nameFr:"Todo List",
    descriptionEn:'A simple Todo list which uses localStorage to store data in with the possibility to add or remove tasks and mark them as finished when you are done.',
    descriptionFr:"Une liste Todo simple qui utilise local storage pour stocker des données avec la possibilité d’ajouter ou de supprimer des tâches et de les marquer comme terminées lorsque vous avez terminé.",
    path:PlannerImage,
    ghpage:true,
    link:'https://nadirmohamedcherfia.github.io/Planner/'
},
{
    id:3,
    nameEn:"Motus guessing frensh words game",
    nameFr:"Motus jeu de devinettes",
    descriptionEn:"A words guessing game with levels and possibility to guess by char or directly with words.",
    descriptionFr:"Un jeu de devinettes de mots avec des niveaux et la possibilité de deviner par char ou directement avec des mots.",
    path:MotusImage,
    ghpage:true,
    link:"https://nadirmohamedcherfia.github.io/jeu-pendule/"
},
{
    id:4,
    nameEn:'IoT Monitoring System',
    nameFr:'système de contrôle IdO',
    descriptionEn:'An interface built with nodered based on Angular js , receives data from an mqtt broker and displays it throw gauges and get stored data from a database to display it in charts.',
    descriptionFr:"Une interface construite avec nodered basée sur Angular js , reçoit des données d’un courtier mqtt et les affiche utilisants des jauges et permettant d'obtenir des données stockées dans une base de données pour les afficher dans des graphiques.",
    path: IoTImage,
    ghpage:false,
}
,
{
    id:5,
    nameEn:'IoT device for air quality monitoring',
    nameFr:"Un dispositif IdO pour la surveillance de la qualité de l'air",
    descriptionEn:'An IoT device based on an ESP32 boards and sensors, uses MQTT protocole to send data to the broker (Raspberry pi) which will be stored in a mysql database and sent to front end interface to displays it.',
    descriptionFr:"Un dispositif IoT basé sur une carte ESP32 et des capteurs, utilise le protocole MQTT pour envoyer des données au courtier (Raspberry pi) qui seront stockées dans une base de données mysql et envoyées à une interface pour les afficher.",
    path: mqttImage,
    ghpage:false,
}
,
{
    id:6,
    nameEn:'Study and Comparaison of machine learning models for air PM2.5 concentration prediction ',
    nameFr:"Etude et comparaison de modèles d’apprentissage automatique pour la prédiction des concentrations de PM2,5 dans l’air",
    descriptionEn:"Comparative study between different AI prediction models is presented: BidirectionalLong Short-Term Memory (Bi-LSTM), Time Distributed Convolutional Neural Network (CNN), and a hybrid model combining both CNN and Bi-LSTM. with several architectures for the different models: Multi Inputs – Multi Outputs,Multi Inputs - Single Output and the univariate.",
    descriptionFr:"Une étude comparative entre les différents modèles de prédiction de l’IA est présentée : BidirectionalLong Short-Term Memory (Bi-LSTM), Time Distributed Convolutional Neural Network (CNN), et un modèle hybride combinant CNN et Bi-LSTM. Avec plusieurs architectures pour les différents modèles : Multi Inputs – Multi Outputs, Multi Inputs - Single Output et le univariate.",
    path: articleImage,
    ghpage:false,
    download:true,
    downloadPath:Article
},
{
    id:7,
    nameEn:'Participation in the fifth International Symposium on Informatics and its Applications (ISIA 2022) ',
    nameFr:"Participation au cinquième Symposium international sur l’informatique et ses applications (ISIA 2022)",
    descriptionEn:'Participation in the ISIA 2022 as a co-author with an article intitled : Study and Comparaison of machine learning models for air PM2.5 concentration prediction.',
    descriptionFr:"Participation à l’ISIA 2022 en tant que coauteur d’un article intitulé Study and Comparaison of machine learning models for air PM2.5 concentration prediction.",
    path: participationImage,
    ghpage:false,
}
]
const Project = () => {
    const [project,setProject]=useState(1)
    const {language,setLanguage} = useContext(ContextLanguage)
  return (
    <div className="container">
        <div className="title">
            {language==='en'
            ?"Realised Projects"
            :language==='fr'
            ?"Projets Réalisés"
            :null
            }

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