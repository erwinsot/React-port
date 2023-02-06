
import * as THREE from 'three'
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Plane } from "@react-three/drei";
import url2 from "/public/codigo3.mp4"

const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 0.5), toneMapped: false })
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 20), toneMapped: false })
const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 3, 1), toneMapped: false })
const glowPurple = new THREE.MeshBasicMaterial({ color: new THREE.Color(2, 0, 3), toneMapped: false })
const glowYellow = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 1, 0), toneMapped: false })

export function Room2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/seconsEsMod4.glb");
  const { actions } = useAnimations(animations, group);


  useEffect(()=>{
    console.log("los actions room2 son",actions)
    actions.robotAction.play()
    actions.GOTAAction.play()
  })
  const [video]= useState(()=>{
    const vid =document.createElement("video");
    vid.src= url2;
    vid.crossOrigin="Anonymous";
    vid.loop=true;
    vid.muted=true;
    vid.play();
    return vid;
  })
  const VideoTextures=new THREE.VideoTexture(video);
  VideoTextures.minFilter=THREE.NearestFilter
  VideoTextures.magFilter = THREE.NearestFilter;
  VideoTextures.encoding = THREE.sRGBEncoding;
  return (
    <group ref={group} {...props} dispose={null} position={[-20,0,0]} scale={3}>
      <group name="Scene">
        <mesh
          name="cabletierra001"
          castShadow
          receiveShadow
          geometry={nodes.cabletierra001.geometry}
          material={materials.CABLE2}
          position={[-0.93, -0.98, -0.54]}
          scale={1.82}
        />
        <mesh
          name="cablepared001"
          castShadow
          receiveShadow
          geometry={nodes.cablepared001.geometry}
          material={materials.CABLE2}
          position={[-1.55, -0.24, -2.34]}
          scale={1.82}
        />
        <mesh
          name="cablepared"
          castShadow
          receiveShadow
          geometry={nodes.cablepared.geometry}
          material={materials.CANBLE1}
          position={[-1.55, -0.53, -2.34]}
          scale={1.82}
        />
        <mesh
          name="cabletierra"
          castShadow
          receiveShadow
          geometry={nodes.cabletierra.geometry}
          material={materials.CANBLE1}
          position={[-0.74, -0.98, -0.53]}
          scale={1.82}
        />
        <mesh
          name="cablesma001"
          castShadow
          receiveShadow
          geometry={nodes.cablesma001.geometry}
          material={materials.CABLE1}
          position={[-2.73, 0.59, -1.63]}
          scale={1.82}
        />
        <mesh
          name="cablesma"
          castShadow
          receiveShadow
          geometry={nodes.cablesma.geometry}
          material={materials.CABLE2}
          position={[-2.76, 0.63, -1.53]}
          rotation={[-0.02, 0, 0.07]}
          scale={1.82}
        />
        <mesh
          name="energy001"
          castShadow
          receiveShadow
          geometry={nodes.energy001.geometry}
          material={materials.carga}
          position={[0.24, -0.55, -2.6]}
          scale={[0.52, 0.1, 0.52]}
        />
        <mesh
          name="energy003"
          castShadow
          receiveShadow
          geometry={nodes.energy003.geometry}
          material={materials.carga}
          position={[0.24, -0.98, -2.6]}
          scale={[0.52, 0.1, 0.52]}
        />
        <group
          name="energy002"
          position={[0.24, -0.76, -2.6]}
          scale={[0.52, 0.1, 0.52]}
        >
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.carga}
          />
          <mesh
            name="Cube002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.TAPAS}
          />
        </group>
        <mesh
          name="energyL"
          castShadow
          receiveShadow
          geometry={nodes.energyL.geometry}
          material={glowBlue}
          position={[0.24, -0.65, -2.6]}
          scale={0.42}
        />
        <mesh
          name="energy"
          castShadow
          receiveShadow
          geometry={nodes.energy.geometry}
          material={materials.carga}
          position={[0.24, -0.33, -2.6]}
          scale={[0.52, 0.1, 0.52]}
        />
        <group
          name="base"
          position={[-2.1, -0.75, 1]}
          rotation={[0, -0.38, 0]}
          scale={1.26}
        >
          <mesh
            name="Cylinder004"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            name="Cylinder004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials.paral}
          />
          <mesh
            name="Cylinder004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_2.geometry}
            material={materials.tapa}
          />
          <mesh
            name="Cylinder004_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_3.geometry}
            material={materials.TAPAS}
          />
        </group>
        <mesh
          name="cupula"
          castShadow
          receiveShadow
          geometry={nodes.cupula.geometry}
          material={materials.trasestanque}
          position={[-2.1, 0.91, 1]}
          scale={0.94}
        />
        <mesh
          name="paredes"
          castShadow
          receiveShadow
          geometry={nodes.paredes.geometry}
          material={materials["Material.023"]}
          position={[0.86, 4.02, 1.59]}
          scale={5.03}
        />
        <group name="smart" position={[-2.42, 0.83, -1.32]} scale={1.82}>
          <mesh
            name="Cylinder014"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014.geometry}
            material={new THREE.MeshBasicMaterial({
          map: VideoTextures
                    })}
          />
          <mesh
            name="Cylinder014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_1.geometry}
            material={new THREE.MeshBasicMaterial({
          map: VideoTextures
                    })}
          />
        </group>
        <mesh
          name="tubo1"
          castShadow
          receiveShadow
          geometry={nodes.tubo1.geometry}
          material={materials.blinn2}
          position={[0.25, 2.57, -3.1]}
          rotation={[1.57, -0.77, 0.05]}
          scale={[0.05, 0.05, 0.22]}
        />
        <mesh
          name="liquido"
          castShadow
          receiveShadow
          geometry={nodes.liquido.geometry}
          material={materials["Material.026"]}
          position={[0.26, 2.58, -3.1]}
          rotation={[1.57, -0.77, 0.05]}
          scale={[0.04, 0.04, 0.22]}
        />
        <mesh
          name="Base_Geo"
          castShadow
          receiveShadow
          geometry={nodes.Base_Geo.geometry}
          material={materials.lambert1}
          position={[0.07, 2.36, -3.1]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.07}
        />
        <group
          name="robot"
          position={[-2.09, -0.12, 0.95]}
          rotation={[1.57, 0, -Math.PI / 2]}
          scale={0.003}
        >
          <mesh
            name="i-robot_obj"
            castShadow
            receiveShadow
            geometry={nodes["i-robot_obj"].geometry}
            material={materials.HoloFillDark}
          />
          <mesh
            name="i-robot_obj_1"
            castShadow
            receiveShadow
            geometry={nodes["i-robot_obj_1"].geometry}
            
            material-color={"#cb3234"} 
            
          />
          <mesh
            name="i-robot_obj_2"
            castShadow
            receiveShadow
            geometry={nodes["i-robot_obj_2"].geometry}
            material={glowBlue}
          />
          <mesh
            name="i-robot_obj_3"
            castShadow
            receiveShadow
            geometry={nodes["i-robot_obj_3"].geometry}
             material={materials.ROJO}
          />
          <mesh
            name="i-robot_obj_4"
            castShadow
            receiveShadow
            geometry={nodes["i-robot_obj_4"].geometry}
            material={glowGreen}
          />
        </group>
        <mesh
          name="tubo_e_caido"
          castShadow
          receiveShadow
          geometry={nodes.tubo_e_caido.geometry}
          material={materials.blinn2}
          position={[0.65, 2.4, -3.1]}
          rotation={[3.08, -1.24, 1.57]}
          scale={[0.05, 0.05, 0.22]}
        />
        <mesh
          name="tubo3"
          castShadow
          receiveShadow
          geometry={nodes.tubo3.geometry}
          material={materials.blinn2}
          position={[-0.1, 2.6, -3.1]}
          rotation={[1.57, -0.02, 0.05]}
          scale={[0.05, 0.05, 0.22]}
        />
        <mesh
          name="GOTA"
          castShadow
          receiveShadow
          geometry={nodes.GOTA.geometry}
          material={glowYellow}
          material-fog={false}
          position={[0.97, 2.34, -2.89]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.31}
        />
        <mesh
          name="liquido002"
          castShadow
          receiveShadow
          geometry={nodes.liquido002.geometry}
          material={materials.blinn3}
          position={[-0.1, 2.61, -3.1]}
          rotation={[1.57, -0.02, 0.05]}
          scale={[0.04, 0.04, 0.22]}
        />
        <group
          name="basecontrol"
          position={[-3.34, 0.41, -2.07]}
          rotation={[0, 0.96, 0]}
          scale={0.43}
        >
          <mesh
            name="Cube021"
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials["Material.022"]}
          />
          <mesh
            name="Cube021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials.TAPAS}
          />
        </group>
        <mesh
          name="liquidocaido"
          castShadow
          receiveShadow
          geometry={nodes.liquidocaido.geometry}
          material={glowYellow}
          position={[0.69, 2.39, -3.09]}
          rotation={[-3.11, -1.25, 1.65]}
          scale={[0.04, 0.04, 0.22]}
        />
        <group
          name="casillero"
          position={[0.13, 1.69, -3.15]}
          scale={[0.85, 0.66, 0.32]}
        >
          <mesh
            name="Cube022"
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            name="Cube022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials["Material.025"]}
          />
        </group>
        <mesh
          name="tubo2"
          castShadow
          receiveShadow
          geometry={nodes.tubo2.geometry}
          material={materials.blinn2}
          position={[0.03, 2.6, -3.1]}
          rotation={[1.57, -0.02, 0.05]}
          scale={[0.05, 0.05, 0.22]}
        />
        <mesh
          name="acido"
          castShadow
          receiveShadow
          geometry={nodes.acido.geometry}
          material={glowYellow}
          position={[0.92, 2.34, -3]}
          rotation={[0, -0.35, 0]}
          scale={0.15}
        />
        <mesh
          name="liquido001"
          castShadow
          receiveShadow
          geometry={nodes.liquido001.geometry}
          material={materials["Material.027"]}
          position={[0.03, 2.61, -3.1]}
          rotation={[1.57, -0.02, 0.05]}
          scale={[0.04, 0.04, 0.22]}
        />
        <group
          name="notas2"
          position={[-0.2, 2.03, -2.78]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.07}
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
        </group>
        <mesh
          name="Alambre_Geo"
          castShadow
          receiveShadow
          geometry={nodes.Alambre_Geo.geometry}
          material={materials.lambert1}
          position={[-0.04, 2.38, -3.1]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.07}
        />
        <mesh
          name="charco"
          castShadow
          receiveShadow
          geometry={nodes.charco.geometry}
         
          material={glowYellow}
          position={[1.09, -1, -3.03]}
          scale={0.3}
        />
        <group
          name="libros001"
          position={[-0.45, 2.42, -3.05]}
          rotation={[-1.97, 1.57, 0]}
          scale={[0.06, 0.3, 0.22]}
        >
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            name="Cube006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials["Material.031"]}
          />
        </group>
        <group
          name="control"
          position={[-3.14, 0.24, -2.25]}
          rotation={[0.96, 0.68, -0.74]}
          scale={0.11}
        >
          <mesh
            name="Cube015"
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials["Material.019"]}
          />
          <mesh
            name="Cube015_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_1.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            name="Cube015_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_2.geometry}
            material={materials["Material.020"]}
          />
          <mesh
            name="Cube015_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_3.geometry}
            material={glowGreen}
          />
          <mesh
            name="Cube015_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_4.geometry}
            material={materials.TAPAS}
          />
        </group>
        <mesh
          name="taoa1"
          castShadow
          receiveShadow
          geometry={nodes.taoa1.geometry}
          material={materials.blinn1}
          position={[0.4, 2.71, -3.1]}
          rotation={[1.57, -0.77, 0.05]}
          scale={0.05}
        />
        <mesh
          name="tapa2"
          castShadow
          receiveShadow
          geometry={nodes.tapa2.geometry}
          material={materials.blinn1}
          position={[0.03, 2.8, -3.1]}
          rotation={[1.57, -0.02, 0.05]}
          scale={0.05}
        />
        <mesh
          name="tapa3"
          castShadow
          receiveShadow
          geometry={nodes.tapa3.geometry}
          material={materials.blinn1}
          position={[-0.09, 2.8, -3.1]}
          rotation={[1.57, -0.02, 0.05]}
          scale={0.05}
        />
        <mesh
          name="tapa_caida"
          castShadow
          receiveShadow
          geometry={nodes.tapa_caida.geometry}
          material={materials.blinn1}
          position={[0.9, 2.39, -3.1]}
          rotation={[0.22, -0.9, -1.34]}
          scale={0.05}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/seconsEsMod4.glb");
