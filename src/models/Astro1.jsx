/* eslint-disable react/prop-types */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf --transform 
Files: scene.gltf [624.38KB] > C:\Users\gabymay\Desktop\r3f\r3f\public\models\astro\scene-transformed.glb [3.06MB] (-390%)
Author: hafizshayan245 (https://sketchfab.com/hafizshayan245)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/walking-astronaut-d9062a2003df422abdafdc02afdac085
Title: Walking Astronaut
*/
/* eslint-disable react/no-unknown-property */


import  { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Astro1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/astro/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)
  // actions
  
//   floating

// idle

// moon_walk

// wave

  useEffect(() => {
    
    
      actions.wave.play()
      actions.wave.fadeOut(10)
      actions.floating.play()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials.material_0} skeleton={nodes.Object_99.skeleton} scale={0.013} />
        <skinnedMesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.material_0} skeleton={nodes.Object_100.skeleton} scale={0.013} />
        <skinnedMesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials.material_1} skeleton={nodes.Object_103.skeleton} scale={0.013} />
        <skinnedMesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.material_2} skeleton={nodes.Object_106.skeleton} scale={0.013} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/astro/scene-transformed.glb')
