import { useEffect } from "react"
import Toggle from "./Toggle"
import Toplang from "../Toplan/Toplang"
const Top = () => {
    useEffect(()=>{
    
    },[])
    return (
    <div className='container'>
        <div className="toggles__container" id="top">
            <div className="toggle">
                <Toggle mode='language'/>
            </div>
            <Toplang/>

        </div>
    </div>
  )
}

export default Top