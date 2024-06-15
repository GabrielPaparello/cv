/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf --transform 
Files: scene.gltf [2.6KB] > C:\Users\ghapzh\Desktop\r3f\public\models\spaceENV\scene-transformed.glb [1.4MB] (-53797%)
Author: Loïc Norgeot (https://sketchfab.com/norgeotloic)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/need-some-space-d6521362b37b48e3a82bce4911409303
Title: Need some space?
*/
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useGLTF } from '@react-three/drei'

export function Space(props) {
  const { nodes, materials } = useGLTF('./models/spaceENV/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <points geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
    </group>
  )
}

useGLTF.preload('./models/spaceENV/scene-transformed.glb')