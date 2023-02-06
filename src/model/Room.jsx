/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three'
import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations, Html ,Float} from "@react-three/drei";
import {gsap} from "gsap";
import { useSpring } from '@react-spring/core'
import url from "/public/codigo_mod.mp4"
import url2 from "/public/codigo3.mp4"
import url3 from "/public/Universo.mp4"
import { DoubleSide, VideoTexture } from 'three';
import { motion } from "framer-motion-3d"
import { useFrame } from '@react-three/fiber';
import { useDispatch, useSelector } from 'react-redux';
import { chCam, chCam2, chIntesity,chIntesity2, chPath,chPath2} from '../Slice/Theme'; 
import AboutPage from '../components/AboutPage';
import { MathUtils } from 'three'


const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 0.5), toneMapped: false })
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 20), toneMapped: false })
const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 3, 1), toneMapped: false })


export function Room(props) {
  const group = useRef();
  const flag=useSelector((state=>state.counter.cam))
  const focus=useSelector((state=>state.counter.size))
  const dispatch=useDispatch()
  const [rot, setrot]=useState(false)
  const [sizeP, setSizeP]=useState(0)
  const [scaleRoom,setScaleRoom]=useState(0)

  
  
  const { nodes, materials, animations } = useGLTF(
    "/lastTimeConPersonV3.glb",
    
  );

  useFrame((state) => {
   // if(rot){
      const t = state.clock.getElapsedTime()
      //group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
      //group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)    
       group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 2) / 20, 0.1)
      //group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
      if(flag){
        document.getElementById("plc").style.opacity="0";
        gsap.to(group.current.rotation,{
          x:0,
          y:Math.PI/10,
          z:0
        })
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 2) / 20, 0.1)
      }
      else{
        document.getElementById("plc").style.opacity="1";

      }
   // }

    if(focus==="desktop"){
      setScaleRoom(1.1)
    
  }
  if(focus==="tablet"){
    setScaleRoom(0.9)
  }
  if(focus==="mobile"){
    setScaleRoom(0.7)
  }
   
   /*  setSizeP(window.innerWidth)
    if(sizeP>1150 ){
      dispatch(chDesktop())
      setScaleRoom(1.1)
     
    }
    if(sizeP<1150 && sizeP >980){
      dispatch(chTablet())
      setScaleRoom(0.9)
      
    }
    if(sizeP<980){
      dispatch(chMobile())
      setScaleRoom(0.7)
    } */
    
   
    
  

    //group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
  })
  const {actions}=useAnimations(animations,group)
  
  
  const[escala]=useState(()=>({x:1,y:0,z:0}))

 useEffect(()=>{
  setTimeout(()=>{
    actions.caer.setLoop(THREE.LoopOnce)
    actions.sillaAction.setLoop(THREE.LoopOnce)
    actions.caer.play()
    actions.sillaAction.play()
  
    /* gsap.to(group.current.rotation,{
      x:0,
      y:Math.PI/2,
      z:0
    }) */
    
    
    console.log("sssssss",actions.caer.getClip().duration)
    setTimeout(()=>{
      actions.trabajando.play()
      actions.mouseAction.play()
      //setrot(true)
      dispatch(chPath())  
  
    },6791.666507720947)
    
    //actions.onComplete(()=>{actions.trabajar.play()})
    
    actions.droncuerpoAction.play()
    actions.ELICESAction.play();
    actions.ELICESAction1.play();
    actions.ELICESAction2.play();
    actions.ELICESAction3.play();
    
    /* actions.ELICESAction_001.play();
    actions.ELICESAction_002.play();
    actions.ELICESAction_003.play(); */
    
    if(nodes.pc1.name=="pc1"){
      console.log(nodes.pc1)
    }
    console.log("los actions son",actions)
      

  },3800)

 
 },[])


  
  //const { actions } = useAnimations(animations, group);

  

  const [video]= useState(()=>{
    const vid =document.createElement("video");
    vid.src= url;
    vid.crossOrigin="Anonymous";
    vid.loop=true;
    vid.muted=true;
    vid.play();
    return vid;
  })
  const [video2]= useState(()=>{
    const vid =document.createElement("video");
    vid.src= url2;
    vid.crossOrigin="Anonymous";
    vid.loop=true;
    vid.muted=true;
    vid.playsInline=true
    vid.play();
    return vid;
  })
  const [video3]= useState(()=>{
    const vid =document.createElement("video");
    vid.src= url3;
    vid.crossOrigin="Anonymous";
    vid.loop=true;
    vid.muted=true;
    vid.playsInline=true
    vid.play();
    return vid;
  })
  
  const VideoTextures=new THREE.VideoTexture(video);
  VideoTextures.minFilter=THREE.NearestFilter
  VideoTextures.magFilter = THREE.NearestFilter;
  VideoTextures.encoding = THREE.sRGBEncoding;

  const VideoTextures2=new THREE.VideoTexture(video2);
  VideoTextures2.minFilter=THREE.NearestFilter
  VideoTextures2.magFilter = THREE.NearestFilter;
  VideoTextures2.encoding = THREE.sRGBEncoding;

  const VideoTextures3=new THREE.VideoTexture(video3);
  VideoTextures2.minFilter=THREE.NearestFilter
  VideoTextures2.magFilter = THREE.NearestFilter;
  VideoTextures2.encoding = THREE.sRGBEncoding;

  

  /* if(sizeP>980) */
  return (
    <group ref={group} {...props} dispose={null} scale={scaleRoom} >
      <group name="Scene">
        <group
          name="Armature"
          position={[8.82, 17.3, 0.92]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={3.239}
          frustumCulled={false}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Brow"
            geometry={nodes.Brow.geometry}
            material={materials["Material.065"]}
            skeleton={nodes.Brow.skeleton}
            frustumCulled={false}
          />
          <skinnedMesh
            name="Eyes"
            geometry={nodes.Eyes.geometry}
            material={materials["Material.063"]}
            skeleton={nodes.Eyes.skeleton}
            frustumCulled={false}
          />
          <skinnedMesh
            name="Hat"
            geometry={nodes.Hat.geometry}
            material={materials["Material.061"]}
            skeleton={nodes.Hat.skeleton}
            frustumCulled={false}
          />
          <skinnedMesh
            name="Pants"
            geometry={nodes.Pants.geometry}
            material={materials["Material.059"]}
            skeleton={nodes.Pants.skeleton}
            frustumCulled={false}
          />
          <skinnedMesh
            name="Tshirt_art"
            geometry={nodes.Tshirt_art.geometry}
            material={materials["Material.057"]}
            skeleton={nodes.Tshirt_art.skeleton}
            frustumCulled={false}
          />
          <group name="Body">
            <skinnedMesh
              name="Circle010"
              geometry={nodes.Circle010.geometry}
              material={materials["Material.066"]}
              skeleton={nodes.Circle010.skeleton}
              frustumCulled={false}
            />
            <skinnedMesh
              name="Circle010_1"
              geometry={nodes.Circle010_1.geometry}
              material={materials["Material.067"]}
              skeleton={nodes.Circle010_1.skeleton}
              frustumCulled={false}
            />
            <skinnedMesh
              name="Circle010_2"
              geometry={nodes.Circle010_2.geometry}
              material={materials["Material.068"]}
              skeleton={nodes.Circle010_2.skeleton}
              frustumCulled={false}
            />
          </group>
          <skinnedMesh
            name="Clock"
            geometry={nodes.Clock.geometry}
            material={materials["Material.064"]}
            skeleton={nodes.Clock.skeleton}
            frustumCulled={false}
          />
          <skinnedMesh
            name="ShoeL"
            geometry={nodes.ShoeL.geometry}
            material={materials.zapatos}
            material-color={"#3b83bd"}
            skeleton={nodes.ShoeL.skeleton}
            frustumCulled={false}
          />
          <skinnedMesh
            name="Hair"
            geometry={nodes.Hair.geometry}
            material={materials["Material.062"]}
            skeleton={nodes.Hair.skeleton}
            frustumCulled={false}
          />
          <skinnedMesh
            name="Hat_Icon"
            geometry={nodes.Hat_Icon.geometry}
            material={materials["Material.060"]}
            skeleton={nodes.Hat_Icon.skeleton}
            frustumCulled={false}
          />
          <skinnedMesh
            name="ShoesR"
            geometry={nodes.ShoesR.geometry}
            material={materials.zapatos}
            skeleton={nodes.ShoesR.skeleton}
            frustumCulled={false}
          />
          <skinnedMesh
            name="Tshirt"
            geometry={nodes.Tshirt.geometry}
            material={materials["Material.058"]}
            skeleton={nodes.Tshirt.skeleton}
            frustumCulled={false}
          />
        </group>
        <motion.group
          name="pc1"
          position={[8.34, 2.48, -2.6]}
          rotation={[Math.PI / 2, 0, 0]}
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{ type:"back.out(2.2)", delay: 0.8, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        
        >
          <mesh name="Plane" castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials["Material.002"] } material-color={"#8d8894"}  />
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={new THREE.MeshBasicMaterial({
          map: VideoTextures2
                    })}
                    onClick={()=>{
                      dispatch(chCam());
                      dispatch(chIntesity2());
                       console.log(flag)

                       }}
                    
          >
          
          </mesh>
          
        </motion.group>
        <motion.group
          name="escritorio"
          position={[4.33, 2.29, -3.34]}
          scale={[1, 0.19, 1]}
          initial={{scale:0}}
          animate={{scaleX:1,scaleY:0.19,scaleZ:1}}
          transition={{duration:0.5,  type:"tween",  }}
        >
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials.patas}
          />
        </motion.group>
        <motion.group
          name="pc2"
          position={[4.99, 2.48, -1.83]}
          rotation={[Math.PI / 2, 0, -0.5]}
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{ type:"back.out(2.2)", delay: 0.5, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
          
        >
          <mesh
            name="Plane002_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials["Material.002"]}
            onClick={()=>{
              dispatch(chCam2());
              dispatch(chIntesity());
               console.log(flag)}}
          />
          <mesh
            name="Plane002_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_2.geometry}
            material={new THREE.MeshBasicMaterial({
          map: VideoTextures
                    })}
            onClick={()=>{console.log("clic me")}}
          >
          {
            flag ?<Html castShadow className='page-li'  scale={0.16} rotation-x={-Math.PI / 2}  position={[-0.028, -0.25, -1.63]}   receiveShadow occlude="blending" transform style={{border: "5px"}} >
          <iframe title="embed" width={700} height={500} src="https://threejs.org/" frameBorder={0} />
        </Html>: <></>
        
     
          }
          
          </mesh>
        </motion.group>
        <motion.group
          name="lapicera"
          position={[3.66, 3.55, -0.72]}
          scale={[0.56, 0.31, 0.56]}
          initial={{scale:0}}
          animate={{scaleX:0.56,scaleY:0.31,scaleZ:0.56}}
          transition={{ type:"back.out(2.2)", delay: 0.4, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        >
          <mesh
            name="Cylinder004"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Cylinder004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cylinder004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_2.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cylinder004_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_3.geometry}
            material={materials["Material.005"]}
          />
        </motion.group>
        <motion.group
          name="tapete"
          position={[8.06, -0.18, 2.44]}
          scale={[1.79, 1.61, 1.61]}
          initial={{scale:0}}
          animate={{scaleX:1.79,scaleY:1.61,scaleZ:1.61}}
          transition={{ type:"back.out(2.2)", delay: 0.4, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        >
          <mesh
            name="Plane007"
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Plane007_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials["Material.011"]}
          />
        </motion.group>
        <motion.group
          name="altavoz"
          position={[10.75, 3.07, -2.12]}
          rotation={[Math.PI / 2, 0, 0.36]}
          scale={0.58}
          initial={{scale:0}}
          animate={{scale:0.58}}
          transition={{ type:"back.out(2.2)", delay: 1, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        >
          <mesh
            name="Plane008"
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            name="Plane008_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials["Material.016"]}
          />
        </motion.group>
        <mesh
          name="bocina"
          castShadow
          receiveShadow
          geometry={nodes.bocina.geometry}
          material={materials["Material.018"]}
          position={[10.85, 2.94, -2.56]}
          rotation={[Math.PI / 2, 0, 0.36]}
          scale={0.17}
        />
        <motion.group
          name="cat"
          position={[4.74, -0.41, 3.97]}
          rotation={[1.57, 0, -0.82]}
          scale={0.2}
          initial={{scale:0}}
          animate={{scale:0.2}}
          transition={{ type:"back.out(2.2)", delay: 1, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
          
        >
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials["Material.019"]}
            
          />
          <mesh
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials["Material.020"]}
          />
          <mesh
            name="Cube005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials["Material.021"]}
          />
        </motion.group>
        <motion.group
          name="libros"
          position={[0.47, 7.47, -3.66]}
          scale={[0.14, 0.69, 0.51]}
          initial={{scale:0}}
          animate={{scaleX:0.14,scaleY:0.69,scaleZ:0.51}}
          transition={{ type:"back.out(2.2)", delay: 1.5, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        >
          <mesh
            name="Cube010"
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            name="Cube010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            name="Cube010_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_2.geometry}
            material={materials.BookColor}
          />
          <mesh
            name="Cube010_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_3.geometry}
            material={materials.White}
          />
          <mesh
            name="Cube010_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_4.geometry}
            material={materials["Material.022"]}
          />
          <mesh
            name="Cube010_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_5.geometry}
            material={materials["Material.023"]}
          />
        </motion.group>
        <motion.group
          name="MATERA2"
          position={[12.52, -0.8, -2.77]}
          rotation={[0, 1.21, 0]}
          scale={1.52}
          initial={{scale:0}}
          animate={{scale:1.52}}
          transition={{ type:"back.out(2.2)", delay: 1.5, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
          
        >
          <mesh
            name="Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.pot}
          />
          <mesh
            name="Mesh_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials["Material.007"]}
          />
          
          <motion.group
            name="Plane002"
            position={[0.01, 0.79, -0.07]}
            rotation={[-0.02, -0.56, 0.23]}
            scale={[1.08, 1.56, 1]}
            initial={{scale:0}}
            animate={{scaleX:1.08,scaleY:1.56,scaleZ:1}}
            transition={{ type:"back.out(2.2)", delay: 1.5, default: {
            duration : 0.9,
            ease: "backOut"
          },}}
          >
            <mesh
              name="Mesh_4"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_4.geometry}
              material={materials.plant}
            />
            <mesh
              name="Mesh_5"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_5.geometry}
              material={materials.plant_rim}
            />
          </motion.group>
          <group
            name="Plane003"
            position={[0.04, 0.72, -0.02]}
            rotation={[-3.11, 1.28, -2.92]}
            scale={[1.07, 1.18, 1]}
          >
            <mesh
              name="Mesh_6"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_6.geometry}
              material={materials.plant}
            />
            <mesh
              name="Mesh_7"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_7.geometry}
              material={materials.plant_rim}
            />
          </group>
          <group
            name="Plane004"
            position={[0.03, 0.78, 0.01]}
            rotation={[0.03, -1.2, 0.16]}
            scale={[1.02, 1.4, 1]}
          >
            <mesh
              name="Mesh_8"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_8.geometry}
              material={materials.plant}
            />
            <mesh
              name="Mesh_9"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_9.geometry}
              material={materials.plant_rim}
            />
          </group>
          <group
            name="Plane005"
            position={[0.09, 0.78, 0.06]}
            rotation={[Math.PI, 1.38, -3.1]}
            scale={[1, 1.63, 1]}
          >
            <mesh
              name="Plane006"
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials.plant}
            />
            <mesh
              name="Plane006_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_1.geometry}
              material={materials.plant_rim}
            />
          </group>
        </motion.group>

        <motion.group
          name="tareas"
          position={[7.59, 6.48, -4.36]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.11}
          initial={{scale:0}}
          animate={{scale:2.11}}
          transition={{ type:"back.out(2.2)", delay: 1.5, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        >
          <mesh
            name="Plane010"
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials.patas}
          />
          <mesh
            name="Plane010_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane010_1.geometry}
            material={materials["Material.038"]}
          />
        </motion.group>
        <motion.group
          name="notas1"
          position={[6.61, 8.04, -4.44]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.25}
          initial={{scale:0}}
          animate={{scale:0.25}}
          transition={{ type:"back.out(2.2)", delay: 1.8, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        >
          <mesh
            name="Cylinder010"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials["Material.039"]}
          />
          <mesh
            name="Cylinder010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_1.geometry}
            material={materials["Material.042"]}
          />
          <mesh
            name="Cylinder010_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_2.geometry}
            material={materials["Material.048"]}
          />
        </motion.group>

        <motion.group
          name="notas2"
          position={[9.28, 6.81, -4.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.25}
          initial={{scale:0}}
          animate={{scale:0.25}}
          transition={{ type:"back.out(2.2)", delay: 1.8, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        >
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials["Material.039"]}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials["Material.048"]}
          />
        </motion.group>

        <motion.group
          name="droncuerpo"
          position={[2.88, -0.06, 6.37]}
          scale={[0.28, 0.13, 0.55]}
          initial={{scale:0}}
          animate={{scaleX:0.28,scaleY:0.13,scaleZ:0.55}}
          transition={{ type:"back.out(2.2)", delay: 1, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        >
          <mesh
            name="Cube013"
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials.DRON}
          />
          <mesh
            name="Cube013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials["Material.046"]}
          />
          <mesh
            name="Cube013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_2.geometry}
            material={materials["Material.047"]}
          />
          <mesh
            name="Cube013_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_3.geometry}
            material={materials["Material.044"]}
          />
          <mesh
            name="Cube013_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_4.geometry}
            material={materials["Material.045"]}
          />
          <mesh
            name="ELICES001"
            castShadow
            receiveShadow
            geometry={nodes.ELICES001.geometry}
            material={materials["Material.043"]}
            position={[-2.92, 0.15, -0.95]}
            rotation={[0, -1.2, 0]}
            scale={[0.31, 0.5, 0.05]}
          />
          <mesh
            name="ELICES"
            castShadow
            receiveShadow
            geometry={nodes.ELICES.geometry}
            material={materials["Material.043"]}
            position={[2.91, 0, -0.95]}
            rotation={[0, -1.2, 0]}
            scale={[0.31, 0.5, 0.05]}
          />
          <mesh
            name="ELICES002"
            castShadow
            receiveShadow
            geometry={nodes.ELICES002.geometry}
            material={materials["Material.043"]}
            position={[-2.94, 0.28, 0.96]}
            rotation={[0, -1.2, 0]}
            scale={[0.31, 0.5, 0.05]}
          />
          <mesh
            name="ELICES003"
            castShadow
            receiveShadow
            geometry={nodes.ELICES003.geometry}
            material={materials["Material.043"]}
            position={[2.91, 0, 0.96]}
            rotation={[0, -1.2, 0]}
            scale={[0.31, 0.5, 0.05]}
          />
        </motion.group>
        <motion.group
          name="cuadro"
          position={[12.19, 5.74, -4.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.15}
          initial={{scale:0}}
          animate={{scale:1.15}}
          transition={{ type:"back.out(2.2)", delay: 1.8, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
          
        >
          <mesh
            name="Plane014"
            castShadow
            receiveShadow
            geometry={nodes.Plane014.geometry}
            material={materials["Material.049"]}
          />
          <mesh
            name="Plane014_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_1.geometry}
            material={materials.mountain}
          />
        </motion.group>
        <motion.mesh
          name="teclado"
          castShadow
          receiveShadow
          geometry={nodes.teclado.geometry}
          material={materials.teclado}
          position={[6.61, 2.46, -1.03]}
          scale={1.47}
          initial={{scale:0}}
          animate={{scale:1.47}}
          transition={{ type:"back.out(2.2)", delay: 1, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        />
        <motion.mesh
          name="silla"
          castShadow
          receiveShadow
          geometry={nodes.silla.geometry}
          material={materials["Material.009"]}
          position={[7.71, -0.33, 1.45]}
          scale={1.04}
          initial={{scale:0, rotateY:0}}
          animate={{scale:1.04, rotateY: 4 * Math.PI}}
          transition={{ type:"back.out(2.2)", delay: 2.5, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        />
         <motion.mesh
          name="espacio"
          castShadow
          receiveShadow
          geometry={nodes.espacio.geometry}
          material={new THREE.MeshBasicMaterial({
          map: VideoTextures3
                    })}
          position={[-1.78, 6.28, 1.63]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={2.57}
        />
        <motion.mesh
          name="base_silla"
          castShadow
          receiveShadow
          geometry={nodes.base_silla.geometry}
          material={materials["Material.012"]}
          position={[7.71, -0.33, 1.45]}
          scale={0.83}
          initial={{scale:0}}
          animate={{scale:0.83}}
          transition={{ type:"back.out(2.2)", delay: 2.3, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        />
        <motion.mesh
          name="mouse"
          castShadow
          receiveShadow
          geometry={nodes.mouse.geometry}
          material={materials.teclado}
          position={[9.13, 2.53, -1.42]}
          rotation={[0, -0.02, 0]}
          scale={1.02}
          initial={{scale:0}}
          animate={{scale:1.02}}
          transition={{ type:"back.out(2.2)", delay: 1.5, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        />
        <group name="pared" position={[8.46, 8.96, 4.97]} scale={-9.44}>
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials["Material.069"]}
          />
          <mesh
            name="Cube003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <motion.group
          name="jueguete"
          position={[3.48, 2.48, 0.2]}
          rotation={[Math.PI, -0.78, Math.PI]}
          scale={11.36}
          initial={{scale:0}}
          animate={{scale:11.36}}
          transition={{ type:"back.out(2.2)", delay: 0.3, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        >
          <mesh
            name="Mesh007"
            castShadow
            receiveShadow
            geometry={nodes.Mesh007.geometry}
            material={materials.verde}
          />
          <mesh
            name="Mesh007_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh007_1.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Mesh007_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh007_2.geometry}
            material={materials["Material.017"]}
          />
          <mesh
            name="Mesh007_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh007_3.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            name="Mesh007_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh007_4.geometry}
            material={materials["Material.032"]}
          />
          <mesh
            name="Mesh007_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh007_5.geometry}
            material={materials["Material.033"]}
          />
          <mesh
            name="Mesh007_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh007_6.geometry}
            material={materials["Material.034"]}
          />
        </motion.group>
        <motion.group
          name="telescop"
          position={[2.4, 7.7, -3.63]}
          rotation={[0, 1.57, 0]}
          scale={0.08}
          initial={{scale:0}}
          animate={{scale:0.08}}
          transition={{ type:"back.out(2.2)", delay: 1.8, default: {
          duration : 0.9,
          ease: "backOut"
        },}}
        >
          <mesh
            name="Cylinder014"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            name="Cylinder014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_1.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            name="Cylinder014_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_2.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            name="Cylinder014_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_3.geometry}
            material={materials["Material.029"]}
          />
          <mesh
            name="Cylinder014_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_4.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            name="Cylinder014_5"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_5.geometry}
            material={materials.patas}
          />
        </motion.group>
        <motion.group
         name="CADCTUS" position={[10.01, 3.11, -2.32]} scale={0.11}
         initial={{scale:0}}
          animate={{scale:0.11}}
          transition={{ type:"back.out(2.2)", delay: 1, default: {
          duration : 0.9,
          ease: "backOut"
        },}}>
          <mesh
            name="Sphere003"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003.geometry}
            material={materials.cactus}
          />
          <mesh
            name="Sphere003_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Sphere003_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003_2.geometry}
            material={materials.tierra}
          />
        </motion.group>
      </group>
    </group>
  );
        }
useGLTF.preload("/public/lastTimeConPersonV3.glb");

 
