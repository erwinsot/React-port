import { useState, userControls, useEffect, useRef,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as THREE from "three";
import Prueba from './Prueba'
import Frutas from './components/Frutas'
import ButtonL from './components/ButtonL'
import { extend,Canvas,useFrame, useThree } from '@react-three/fiber'
import World from './World/World'
import { ContactShadows, Shadow, Center } from '@react-three/drei'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { Vector3 } from 'three'
import GSAP from "gsap";
import { Effects, OrbitControls, OrthographicCamera, BakeShadows } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import Preloader from './World/Preloader'
import Intro from './World/Intro'
import CameraControls from 'camera-controls'
extend({ UnrealBloomPass })
const vec = new Vector3()
import { useDispatch, useSelector } from 'react-redux'
import { chMobile, chDesktop,chTablet } from './Slice/Theme';
CameraControls.install({ THREE })
import Camera from './components/Camera';
import Enviroment from './World/Enviroment';
import FormE from './World/FormE';
var rotacion=0;



function Controls({ zoom, focus, buzon, pos = new THREE.Vector3(), look = new THREE.Vector3() }) {
  const dispatch=useDispatch()
  const camera = useThree((state) => state.camera)
  
  const gl = useThree((state) => state.gl)
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
  return useFrame((state, delta) => {
  let sz=window.innerWidth
  let wz=window.innerHeight
  /* console.log("ancho",sz)
  console.log("alto",wz) */
  if(window.innerWidth>1150 ){
    dispatch(chDesktop())
    if(zoom){
      pos.set(7.7, 4.48, -1+ 0.4)
      look.set(6.1, 4.48, -1.83 - 0.5)

    }
    if(focus && zoom===false){
      pos.set(-3.78, 7.28, 1.63+0.4)
      look.set(-5.5, 6.8, 1.63-0.5)

    }
    if(buzon && zoom===false && focus===false){
      pos.set(-40.78, 5.28, 1.2+0.4)
      look.set(-43, 5, 0-0.5)

    }
    if(zoom===false && focus===false && buzon===false){
      pos.set(25, 9, 12)
      look.set(1, 2, 0)
    }
   /*  zoom ?  : 
    zoom ?  :  */

    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
    
   
  }
  if((window.innerWidth<1150 && window.innerWidth >769)&& wz>430){
    dispatch(chTablet())
    console.log("tablet")
   /*  zoom ? pos.set(7, 2,  -0+ 0.4) : pos.set(25, 9, 12)
    zoom ? look.set(4.3, -9.6, -1.83 - 0.5) : look.set(4, 2, 0) */
    if(zoom){
      pos.set(7, 2,  -0+ 0.4)
      look.set(4.3, -9.6, -1.83 - 0.5)

    }
    if(focus && zoom===false){
      pos.set(-3.78, 7.28, 1.63+0.4)
      look.set(-5.5, 6.8, 1.63-0.5)

    }
    if(buzon && zoom===false && focus===false){
      pos.set(-40.78, 5.28, 1.2+0.4)
      look.set(-43, 5, 0-0.5)

    }
    if(zoom===false && focus===false && buzon===false){
      pos.set(30, 8, 15)
      look.set(6, 2, 0)
    }
    
    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
    
    
  }
  if(sz<768 && wz>430){
    dispatch(chMobile())
    
  /*  console.log("m") */
    
    if(zoom){
      pos.set(9, 2, 6 + 0.4)
      look.set(3.86, 1.1, -1 - 0.5)
    }
    if(focus && zoom===false){
      pos.set(-3.78, 7.28, 1.63+0.4)
      look.set(-5.5, 6.8, 1.63-0.5)

    }
    if(buzon && zoom===false && focus===false){
      pos.set(-40.78, 5.28, 1.2+0.4)
      look.set(-43, 5, 0-0.5)

    }
    
    if(zoom===false && focus===false && buzon===false){
      pos.set(40, 9, 15)
      look.set(10.1, -1, 0)
    }

    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
    
  }
  if(wz<429 && sz<920 ){
    dispatch(chMobile())
   console.log("m")
    if(zoom){
      pos.set(4, 2.8, -1+ 0.4)
      look.set(3.1, 2.6, -1 - 0.5)
    }
    if(focus && zoom===false){
      pos.set(-1.78, 5.28, 1.63+0.4)
      look.set(-3.3, 5, 1.63-0.5)

    }
    if(buzon && zoom===false && focus===false){
      pos.set(-40.78, 5.28, 1.2+0.4)
      look.set(-43, 5, 0-0.5)

    }
    
    if(zoom===false && focus===false && buzon===false){
      pos.set(13, 5, 10)
      look.set(0, 2, 0)
    }

    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
    
  } 

  })
}


function App() {


  //const MyWorld= useRef()
  const [count, setCount] = useState(0)
  const [loading, setLoading]=useState(false)
  const [mousePos, setMousePos] = useState({});
  //const [size, setSize]=useState(0)
  const flag=useSelector((state=>state.counter.cam))
  const ligth=useSelector((state=>state.counter.luz))
  const focus=useSelector((state=>state.counter.travel))
  const buzon=useSelector((state=>state.counter.buzon))
  
  var rot=0
/* useEffect(()=>{
  const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
    setRotation((event.clientX-window.innerWidth/2)*2)/window.innerWidth
    rot=((event.clientX-window.innerWidth/2)*2)/window.innerWidth;
    
    
  };
  

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener(
      'mousemove',
      handleMouseMove
    );
  };

  

}) */




    setTimeout(()=>{
      setLoading(true);
    },5000)


  if(loading==false){
    return <Preloader/>
  }
  else{
  

  return (
    <>
    <main className='App'>
      {/* <Prueba/>
      <Frutas/>
      <ButtonL/> */}
      {/* <div>
      The mouse is at position{' '}
      <b>
        ({mousePos.x}, {mousePos.y})
      </b>
    </div> */}
      <Intro/>
      <FormE/>
    </main>
    <Canvas className='canvas' gl={{ antialias: true }} dpr={window.devicePixelRatio} camera={{fov:35}} >
    {/* <Camera/> */}
    <Enviroment/>
    <Controls zoom={flag} focus={focus} buzon={buzon} />
    <Effects disableGamma>
        <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
      </Effects>
      <World rotacion-y={[180]}/>
      {/* <Rig/> */}
       <BakeShadows />
      {/* <perspectiveCamera makeDefault far={100} near={0.1} position={[15, 35, 15]} zoom={110} /> */}
      <OrbitControls  enableZoom={false} />
      
    </Canvas>
    </>
    
  )}
}

export default App
