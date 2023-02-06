/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three'
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";


const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 0.5), toneMapped: false })
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 20), toneMapped: false })
const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 3, 1), toneMapped: false })

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Version1.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Cube"
          position={[0.66, 1.34, -18.76]}
          rotation={[0, 1.54, 0]}
          scale={0.97}
        >
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={glowRed}
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials["Wall Two"]}
          />
        </group>
        <group
          name="Mini_Floor"
          position={[-5.44, -0.82, 13.61]}
          rotation={[-Math.PI, 0.82, -Math.PI]}
        >
          <mesh
            name="Cube105"
            castShadow
            receiveShadow
            geometry={nodes.Cube105.geometry}
            material={materials.Wall}
          />
          <mesh
            name="Cube105_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube105_1.geometry}
            material={materials["Wall Two"]}
          />
        </group>
        <group
          name="Shelves"
          position={[-10.17, 12.06, 0.3]}
          rotation={[-Math.PI, 0.82, -Math.PI]}
        >
          <mesh
            name="Cylinder010"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cylinder010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_1.geometry}
            material={materials.lamps}
          />
          <mesh
            name="Cylinder010_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_2.geometry}
            material={materials.Book}
          />
          <mesh
            name="Cylinder010_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_3.geometry}
            material={materials.Pages}
          />
          <mesh
            name="Cylinder010_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_4.geometry}
            material={materials.book7}
          />
          <mesh
            name="Cylinder010_5"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_5.geometry}
            material={materials.Book2}
          />
          <mesh
            name="Cylinder010_6"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_6.geometry}
            material={materials["Table Top.002"]}
          />
          <mesh
            name="Cylinder010_7"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_7.geometry}
            material={materials["pen 3"]}
          />
          <mesh
            name="Cylinder010_8"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_8.geometry}
            material={materials["Table Leg.002"]}
          />
        </group>
        <mesh
          name="fish"
          castShadow
          receiveShadow
          geometry={nodes.fish.geometry}
          material={glowGreen}
          position={[10.39, 5.2, 2.02]}
          rotation={[-Math.PI, 0.75, -Math.PI]}
        />
        <group
          name="Desks"
          position={[-6.05, 2.58, -0.36]}
          rotation={[-Math.PI, 0.82, -Math.PI]}
          scale={[0.77, 1, 0.73]}
        >
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={glowGreen}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials["Table Leg.002"]}
          />
          <mesh
            name="Cylinder012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_2.geometry}
            material={materials["Table Leg Black.002"]}
          />
        </group>
        <mesh
          name="Dirt"
          castShadow
          receiveShadow
          geometry={nodes.Dirt.geometry}
          material={materials.Dirt}
          position={[-9.13, -0.5, 11.81]}
          rotation={[-Math.PI, 0.82, -Math.PI]}
        />
        <group
          name="Clock"
          position={[10.62, 14.87, -0.45]}
          rotation={[-Math.PI / 2, 0, 2.32]}
        >
          <mesh
            name="Cylinder017"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017.geometry}
            material={materials["Table Top.002"]}
          />
          <mesh
            name="Cylinder017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017_1.geometry}
            material={materials["Table Leg.002"]}
          />
        </group>
        <group
          name="Lamp"
          position={[-7.01, -0.45, 10.2]}
          rotation={[-Math.PI, 0.82, -Math.PI]}
        >
          <mesh
            name="Plane010"
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials.fdsa}
          />
          <mesh
            name="Plane010_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane010_1.geometry}
            material={glowGreen}
          />
        </group>
        <mesh
          name="FloorSecond"
          castShadow
          receiveShadow
          geometry={nodes.FloorSecond.geometry}
          material={materials.Fish}
          position={[-6.59, -0.5, 13.43]}
          rotation={[Math.PI, -0.75, Math.PI]}
        />
        <group
          name="Mailbox"
          position={[-2.78, -0.68, 14.75]}
          rotation={[Math.PI / 2, 0, -2.32]}
        >
          <mesh
            name="Cylinder018"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018.geometry}
            material={materials.Key}
          />
          <mesh
            name="Cylinder018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_1.geometry}
            material={materials.book7}
          />
          <mesh
            name="Cylinder018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_2.geometry}
            material={materials.Mini}
          />
        </group>
        <mesh
          name="FloorThird"
          castShadow
          receiveShadow
          geometry={nodes.FloorThird.geometry}
          material={materials["seas.003"]}
          position={[-7.25, -0.5, 15.16]}
          rotation={[Math.PI, -0.75, Math.PI]}
        />
        <mesh
          name="FloorFirst"
          castShadow
          receiveShadow
          geometry={nodes.FloorFirst.geometry}
          material={materials["seas.004"]}
          position={[-4.93, -0.5, 12.76]}
          rotation={[Math.PI, -0.75, Math.PI]}
        />
        <group
          name="Flower1"
          position={[-9.03, -0.68, 11.6]}
          rotation={[2.45, -1.08, 1.94]}
        >
          <mesh
            name="Circle015"
            castShadow
            receiveShadow
            geometry={nodes.Circle015.geometry}
            material={materials.Book2}
          />
          <mesh
            name="Circle015_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_1.geometry}
            material={materials.book7}
          />
          <mesh
            name="Circle015_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_2.geometry}
            material={materials.Fish}
          />
        </group>
        <group
          name="Flower2"
          position={[-9.42, -0.63, 11.94]}
          rotation={[0.36, -0.55, -0.38]}
        >
          <mesh
            name="Circle016"
            castShadow
            receiveShadow
            geometry={nodes.Circle016.geometry}
            material={materials.Book2}
          />
          <mesh
            name="Circle016_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle016_1.geometry}
            material={materials.book7}
          />
          <mesh
            name="Circle016_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle016_2.geometry}
            material={materials.Fish}
          />
        </group>
        <mesh
          name="Chair"
          castShadow
          receiveShadow
          geometry={nodes.Chair.geometry}
          material={materials["pen 3"]}
          position={[-4.15, 2.74, 2.77]}
          rotation={[0, 1.41, 0]}
        />
        <group
          name="Floor_Items"
          position={[-2.86, -0.21, 1.6]}
          rotation={[-Math.PI, 0.82, -Math.PI]}
        >
          <mesh
            name="Cube132"
            castShadow
            receiveShadow
            geometry={nodes.Cube132.geometry}
            material={materials["Table Leg.002"]}
          />
          <mesh
            name="Cube132_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube132_1.geometry}
            material={materials["Trash Lid"]}
          />
          <mesh
            name="Cube132_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube132_2.geometry}
            material={materials["seas.003"]}
          />
          <mesh
            name="Cube132_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube132_3.geometry}
            material={materials["Table Top.002"]}
          />
        </group>
        <group
          name="Body"
          position={[-2.14, 10.81, -8.15]}
          rotation={[-Math.PI, 0.82, Math.PI / 2]}
        >
          <mesh
            name="Plane014"
            castShadow
            receiveShadow
            geometry={nodes.Plane014.geometry}
            material={materials.Window}
          />
          <mesh
            name="Plane014_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_1.geometry}
            material={materials.Wall}
          />
          <mesh
            name="Plane014_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_2.geometry}
            material={materials["Wall Two"]}
          />
        </group>
        <group
          name="Aquarium"
          position={[7.68, 1.61, 0.81]}
          rotation={[-Math.PI, 0.82, -Math.PI]}
        >
          <mesh
            name="Cube136"
            castShadow
            receiveShadow
            geometry={nodes.Cube136.geometry}
            material={materials["water.001"]}
          />
          <mesh
            name="Cube136_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_1.geometry}
            material={materials.tanke}
          />
          <mesh
            name="Cube136_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_2.geometry}
            material={materials.Rock}
          />
          <mesh
            name="Cube136_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_3.geometry}
            material={materials.seas}
          />
          <mesh
            name="Cube136_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_4.geometry}
            material={materials["seas.002"]}
          />
          <mesh
            name="Cube136_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_5.geometry}
            material={materials["seas.001"]}
          />
          <mesh
            name="Cube136_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_6.geometry}
            material={materials.seaweed}
          />
          <mesh
            name="Cube136_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_7.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            name="Cube136_8"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_8.geometry}
            material={materials["rug01.001"]}
          />
          <mesh
            name="Cube136_9"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_9.geometry}
            material={materials["floorboards.001"]}
          />
          <mesh
            name="Cube136_10"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_10.geometry}
            material={materials["rug03.002"]}
          />
          <mesh
            name="Cube136_11"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_11.geometry}
            material={materials["chair01.001"]}
          />
          <mesh
            name="Cube136_12"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_12.geometry}
            material={materials["chair02.001"]}
          />
        </group>
        <group
          name="cuadros"
          position={[-2.14, 10.81, -8.15]}
          rotation={[-Math.PI, 0.82, Math.PI / 2]}
        >
          <mesh
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.cuadro1}
          />
          <mesh
            name="Plane001_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials.cuadro2}
          />
          <mesh
            name="Plane001_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials.cuadro3}
          />
          <mesh
            name="Plane001_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_3.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <group
          name="Computer"
          position={[-7.95, 6.73, -1.05]}
          rotation={[-Math.PI, 0.82, -Math.PI]}
        >
          <mesh
            name="Cube014"
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials["Computer.002"]}
          />
          <mesh
            name="Cube014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={materials["Screen.002"]}
          />
        </group>
        <group
          name="cat"
          position={[0.75, 2.19, -5.71]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.2}
        >
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="Cube_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Cube_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          name="Table_Stuff"
          position={[-7.6, 4.93, -0.45]}
          rotation={[-Math.PI, 0.82, -Math.PI]}
        >
          <mesh
            name="Cube114"
            castShadow
            receiveShadow
            geometry={nodes.Cube114.geometry}
            material={materials.Pot}
          />
          <mesh
            name="Cube114_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_1.geometry}
            material={materials.Dirt}
          />
          <mesh
            name="Cube114_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_2.geometry}
            material={materials["Leaf.002"]}
          />
          <mesh
            name="Cube114_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_3.geometry}
            material={materials.Leaf}
          />
          <mesh
            name="Cube114_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_4.geometry}
            material={materials.Key}
          />
          <mesh
            name="Cube114_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_5.geometry}
            material={materials["Mini.001"]}
          />
          <mesh
            name="Cube114_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_6.geometry}
            material={materials.pen2}
          />
          <mesh
            name="Cube114_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_7.geometry}
            material={materials.pen1}
          />
          <mesh
            name="Cube114_8"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_8.geometry}
            material={materials["pen 3"]}
          />
          <mesh
            name="Cube114_9"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_9.geometry}
            material={materials.Book}
          />
          <mesh
            name="Cube114_10"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_10.geometry}
            material={materials.Pages}
          />
          <mesh
            name="Cube114_11"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_11.geometry}
            material={materials.Trackpad}
          />
          <mesh
            name="Cube114_12"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_12.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Cube114_13"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_13.geometry}
            material={materials.drink}
          />
          <mesh
            name="Cube114_14"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_14.geometry}
            material={materials["mouse surface.001"]}
          />
          <mesh
            name="Cube114_15"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_15.geometry}
            material={materials["apple logo.001"]}
          />
          <mesh
            name="Cube114_16"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_16.geometry}
            material={materials["Mini.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Version1.glb");
