import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dark,sun } from "../Slice/Theme";
const  ButtonL =()=>{
    const ligt=useSelector((state=>state.counter.value))
    const flag=useSelector((state=>state.counter.luz))
    const dispatch=useDispatch()
    
    return(
        <>
         <div className="ButtonL">
            <label className="switch">
            <input type="checkbox"  onClick={()=>{if(flag){dispatch(dark()); }else{dispatch(sun()); }}}></input>
            <span className="slider round"></span>
            </label>
        
        </div>
        

        </>
       
    )
}

export default ButtonL