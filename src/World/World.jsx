import { Environment, OrbitControls, useHelper } from "@react-three/drei"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Model } from "../model/Model";
import { Tower } from "../model/Tower";
import {Room} from "../model/Room"
import GSAP from "gsap";
import { Room2 } from "../model/Room2";
import { Watch } from "../model/Watch";
import { Room3 } from "../model/Room3";
import { Room4 } from "../model/Room4";


const World=()=>{

    

    const light=useSelector((state=>state.counter.value))
    const path=useSelector((state=>state.counter.path))
    const room4=useSelector((state=>state.counter.room))
    //console.log(light)

  

    const[sunlight, setunlight]=useState("#FFD300");
    return(
        <>
            <OrbitControls/>
            
            {/* <directionalLight color={light} intensity={3} castShadow shadow={512} scale={[2048,2048]} position={[-15,7,3]}/>
            <ambientLight color={light} intensity={1}/> */}
            {/* <rectAreaLight intensity={50} color="#0000ff"/>
            <Model castShadow /> */}
            {/* <mesh>
                <boxGeometry />
                <meshBasicMaterial color={'red'}/>
            </mesh> */}
           {/*  <Tower/> */}
           <Room/>
           {
            path? <><Room3/> {room4 ?<Room4/>:<></> } </>:<></>
           }
           {/* <Room2/> */}
           {/* <Room3/> */}
           {/* <Watch/> */}
        </>
    )
}

export default World