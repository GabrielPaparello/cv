import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Rocket } from '../models/Rocket'

const RocketRender = () => {
  return (
    <Canvas style={{ position: "absolute" }}>
            <ambientLight intensity={1} color={"white"} position={[0, 10, 0]} />
            <Rocket position={[0, 3, 0]} rotation={[0.5, -0.4, -0.2]} scale={0.0023} />
          </Canvas>
  )
}

export default RocketRender