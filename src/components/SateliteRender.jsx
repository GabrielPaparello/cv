import { Float } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import  { Suspense } from 'react'
import { Satelite } from '../models/Satelite'

const SateliteRender = () => {
  return (
    <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={1} color={"white"} position={[0, 10, 0]} />
              <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Satelite position={[0, 2, 0]} rotation={[2, 2, 0]} scale={[0.09, 0.09, 0.09]} />
              </Float>
            </Suspense>
          </Canvas>
  )
}

export default SateliteRender