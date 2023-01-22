import React,{useState} from 'react'
import emailjs from '@emailjs/browser';
import './smtp.css'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
const serviceId ='service_jvwlg4u'
const templateId ='template_tdqqxek'
const PUBLIC_KEY='fPYICqSB2OHJRYqPU'


const Smtp = () => {
    const [contact,setContact] = useState({name:'',subject:'',message:'',email:''})
    const [valideEmail,setValideEmail] = useState(false)
    function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail))
        {
            setValideEmail(true)
        }else{
            setValideEmail(false)
        }
    }
    const handleNameChange=(e)=>{
        setContact((contact)=>{
            return {...contact,name:e.target.value}
        })
    }
    const handleSubjectChange=(e)=>{
        setContact((contact)=>{
            return {...contact,subject:e.target.value}
        })
    
    }
    const handleEmailChange=(e)=>{
        ValidateEmail(e.target.value)
        setContact((contact)=>{
            return {...contact,email:e.target.value}
        })
    }
    const handleMessageChange=(e)=>{
        setContact((contact)=>{
            return {...contact,message:e.target.value}
        })
    }
    const handleClick=(e)=>{
        e.preventDefault()
        if(valideEmail){
            emailjs.send(serviceId,templateId,contact,PUBLIC_KEY)
            .then((res)=>{
                if(res.text==='OK'){
                        const success = document.querySelector('.success')
                        success.classList.add('show')
                        window.setTimeout(()=>{
                            success.classList.remove('show')
                        },4000)
                        setContact({name:'',subject:'',message:'',email:''})
                    }
                }).catch((err)=>{console.log(err)})
        }
    }
    return (
    <div className='container' id="contactMe">
        <form action="" className='form'>
        <div className="title">
            Contact me
        </div>
            <div className="form__element">
                <label htmlFor="name">Name </label><br></br>
                <input type="text" value={contact.name} id="name" onChange={handleNameChange}/>
            </div>
            <div className="form__element">
                <label htmlFor="email">Email </label><br></br>
                <input type="email" rows='10' value={contact.email} id="emailf" required onChange={handleEmailChange}/>
                <div className="infoEmail">
                    {contact.email==='' || valideEmail ? '' :'Email non valide'}
                </div>
            </div>
            <div className="form__element">
                <label htmlFor="subject">Subject </label><br></br>
                <input type="text"  id="subject"value={contact.subject} onChange={handleSubjectChange}/>
            </div>
            <div className="form__element">
                <label htmlFor="message">Message </label><br></br>
                <textarea  id="message" value={contact.message} required onChange={handleMessageChange}/>
            </div>
            <button className='btn btn-primary' onClick={handleClick}>Send</button>
            <div className="success">
                <div className="success__container">
                    Message Sent successfully, we will respond the soonest possible, have a good day! <span className="icon">
                        <IoCheckmarkDoneCircleOutline/>
                        </span>
                </div>
            </div>
        </form>

    </div>
  )
}

export default Smtp