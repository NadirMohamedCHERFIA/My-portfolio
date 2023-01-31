import React, { useState } from 'react'
import { ContextLanguage } from '../Context/ContextLanguage'
import './knowledges.css'
import ReactImage from './../../assets/React.png'
import NodeImage from './../../assets/node.png'
import ExpressImage from './../../assets/Express.png'
import MysqlImage from './../../assets/sql.png'
import GithubImage from './../../assets/GithubImage.png'
import VBAImage from './../../assets/vba.png'
import DockerImage from './../../assets/Docker.png'
import VisualStudioImage from './../../assets/Visual_Studio.png'
import ProteusImage from './../../assets/proteus.png'
import PlatformIoImage from './../../assets/platformio-logo.png'
import PacketTracerImage from './../../assets/Packet Tracer.png'
import CImage from './../../assets/C.png'
import WireSharkImage from './../../assets/wireshark.png'
import ArduinoImage from './../../assets/arduino.png'
import MqttImage from './../../assets/mqtt.png'
import TcpIpImage from './../../assets/TCPIP.png'
import LinuxImage from './../../assets/linux.png'
import MachineLearningImage from './../../assets/machinel.png'
import VhdlImage from './../../assets/vhdl.png'
import ProtocolesImage from './../../assets/protocoles.png'
import SassImage from './../../assets/sass.png'
import HtmlImage from './../../assets/logo-2582748_960_720.png'
import Stm32Image from './../../assets/stm32.png'
import Esp32Image from './../../assets/esp32.png'

import {MdAdd} from 'react-icons/md'
import {AiOutlineMinus} from 'react-icons/ai'
import { useContext } from 'react'
const Knowledges = () => {
    const [manageplus,setManagePLus] = useState({Technologies:false,Softwares:false,Knowledges:false})
    const {language} = useContext(ContextLanguage)
    const handleClick=(id)=>{
        const knw=document.querySelectorAll('.knowledges__container')
        knw[id-1].classList.toggle('open')
        id===1 ?setManagePLus({...manageplus,Technologies:!(manageplus.Technologies)})
        :id===2 ?setManagePLus({...manageplus,Softwares:!(manageplus.Softwares)})
        :id===3 ? setManagePLus({...manageplus,Knowledges:!(manageplus.Knowledges)}) : console.log('')   
    }
  return (
    <div className='container'>
        {language==='en'
        ?"Centers of intrest"
        :language==='fr'
        ?"Centres d’intérêt"
        :null
        }
        <div className="knowledges">
            <div className="knowledges__container" onClick={()=>handleClick(1)}>
                <div className="head">
                        {language==='en'
                        ?"Technologies"
                        :language==='fr'
                        ?"Technologies"
                        :null
                        }
                    <div className="logo">
                        {!manageplus.Technologies ? <MdAdd/> : <AiOutlineMinus/>}
                    </div>
            </div>
            <div className="technologies">
                <div className="techImage">
                <img src={HtmlImage} alt="" />
            </div>
            <div className="techImage">
                <img src={SassImage} alt="" />
            </div>
            <div className="techImage">
                <img src={ReactImage} alt="" />
            </div>
            <div className="techImage">
                <img src={NodeImage} alt="" />
            </div>
            <div className="techImage">
                <img src={ExpressImage} alt="" />
            </div>
            <div className="techImage">
                <img src={CImage} alt="" />
            </div>
            <div className="techImage">
                <img src={MysqlImage} alt="" />
            </div>
            <div className="techImage">
                <img src={VBAImage} alt="" />
            </div>
            <div className="techImage">
                <img src={MqttImage} alt="" />
            </div>
            <div className="techImage">
                <img src={GithubImage} alt="" />
            </div>
            </div>
            </div>
            <div className="knowledges__container" onClick={()=>handleClick(2)}>
                <div className="head">
                    {language==='en'
                    ?"Softwares"
                    :language==='fr'
                    ?"Logiciels"
                    :null
                    }
                    <div className="logo">
                        {!manageplus.Softwares ? <MdAdd/> : <AiOutlineMinus/>}
                    </div>
            </div>
            <div className="technologies">
            <div className="techImage">
                <img src={VisualStudioImage} alt="" />
            </div>
            <div className="techImage">
                <img src={ProteusImage} alt="" />
            </div>
            <div className="techImage">
                <img src={PlatformIoImage} alt="" />
            </div>
            <div className="techImage">
                <img src={ArduinoImage} alt="" />
            </div>
            <div className="techImage">
                <img src={PacketTracerImage} alt="" />
            </div>
            <div className="techImage">
                <img src={WireSharkImage} alt="" />
            </div>
                </div>
            </div>
            <div className="knowledges__container" onClick={()=>handleClick(3)}>
                <div className="head">
                    {language==='en'
                    ?"knowledges"
                    :language==='fr'
                    ?"Connaissances"
                    :null
                    }
                    <div className="logo">
                        {!manageplus.Knowledges ? <MdAdd/> : <AiOutlineMinus/>}
                    </div>
            </div>
            <div className="technologies">
                <div className="techImage">
                <img src={DockerImage} alt="" />
            </div>
            <div className="techImage">
                <img src={MachineLearningImage} alt="" />
            </div>
            <div className="techImage">
                <img src={VhdlImage} alt="" />
            </div>
            <div className="techImage">
                <img src={ProtocolesImage} alt="" />
            </div>
            <div className="techImage">
                <img src={TcpIpImage} alt="" />
            </div>
            <div className="techImage">
                <img src={LinuxImage} alt="" />
            </div>
            <div className="techImage">
                <img src={Stm32Image} alt="" />
            </div>
            <div className="techImage">
                <img src={Esp32Image} alt="" />
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Knowledges