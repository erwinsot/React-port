import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Enviroment = () => {
  const ligth=useSelector((state=>state.counter.intensity))
  const dark=useSelector((state=>state.counter.luz))
  const dark2=useSelector((state=>state.counter.luz2))

  return (
    <>
      
      <ambientLight color={"#00aae4"} intensity={ligth}/>
      <directionalLight color={"#00aae4"} intensity={0.1} position ={[-20,30,3] }  />
      <rectAreaLight position ={[-29,0,-7] } rotation-x={-Math.PI / 2} width={4} height={4} intensity={1} />
      <rectAreaLight position ={[-10,-5,-20] } rotation-x={Math.PI / 2} color={"#e5b501"} width={20} height={1.7} intensity={1} />
      <rectAreaLight position ={[-29,2,-7] } rotation-x={Math.PI / 2} width={3} height={3} intensity={1.5} />
      <hemisphereLight intensity={dark} />
      <directionalLight intensity={dark2} position={[-1,30,3] } castShadow={true} shadow={true}/>
    </>
    
  )
}

export default Enviroment