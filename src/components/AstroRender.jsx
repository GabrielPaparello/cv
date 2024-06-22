import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Astro1 } from '../models/Astro1'

const AstroRender = () => {
  return (
    <Canvas>
            <ambientLight intensity={1} color={"white"} position={[0, 10, 0]} />
            <Astro1  position={[0, 1.8, -4]} rotation={[0.6, 0, 0]} />
          </Canvas>
  )
}

export default AstroRender