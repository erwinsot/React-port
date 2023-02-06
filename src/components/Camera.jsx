import React from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'


function Camera() {
    
    return (
    <>
      <PerspectiveCamera 
      makeDefault
      position={[35,10,40]}
      fov={55}
      aspect={window.innerWidth/window.innerHeight}
      
     />
     
    </>
    
    
     
  )
}

export default Camera