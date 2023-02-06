import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

export function Watch(props) {
    const ref = useRef()
    const { nodes, materials } = useGLTF('/watch-v1.glb')
    useFrame((state) => {
      const t = state.clock.getElapsedTime()
      ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
      ref.current.rotation.y = Math.sin(t / 4) / 8
      ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
      ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })
    return (
      <group ref={ref} {...props} dispose={null}>
        <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass}>
          <Html scale={100} rotation={[Math.PI / 2, 0, 0]} position={[180, -350, 50]} transform occlude>
            <div className="annotation">
              6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
            </div>
          </Html>
        </mesh>
       
      </group>
    )
  }