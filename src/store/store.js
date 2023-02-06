import { configureStore } from "@reduxjs/toolkit";
import counter from '../Slice/Theme' 
import chCam from "../Slice/ChCam";
export const store =configureStore({
    reducer:{
        counter,
        chCam
    
    }
})

export default store