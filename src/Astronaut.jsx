/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Canvas, useFrame ,} from "@react-three/fiber";
import "./App.css";
import { Suspense, useRef, useState } from "react";
import { Environment, Sparkles, Float, Loader,    } from "@react-three/drei";
import { Astro } from "./models/Astro";
import { Space } from './models/Space'
import { Planets } from './models/Planets'
import { Explosion } from './models/Explosion'
import {AnimatedDiv} from './animations/AnimatedDiv'
import { MovingCamera } from "./animations/MovingCamera";
import { MovingStars } from "./animations/MovingStars";
import { Navigate, useNavigate } from "react-router-dom";
function Astronaut() {
  // STATES
  const [isClicked,setIsClicked] = useState(false)
  const [isDone, setIsdone] = useState(false);
  const [position, setPosition] = useState([-1, -2, -20]);
  const [finished,setFinished] = useState(false)
  const Moving = (props) => {
    const ref = useRef();
    useFrame((_state, delta) => {
      if (!isDone) {
        // eslint-disable-next-line no-unused-vars
        let o = (ref.current.position.z += delta * 10);
        if (ref.current.position.z > 20 && !isDone) {
          let x = -1;
          let y = -2.5;
          let z = 0;
          setPosition([x, y, z]);
          setIsdone(true);
        }
      }
    });
    return <group ref={ref}>{props.children}</group>;
  };
  const NavigationHandler = () => {
  const navigate = useNavigate();
const handlelink = () => {
  Navigate('/home')
}
  return (
    <>
     <AnimatedDiv isDone={isDone} isClicked={isClicked} setIsClicked={setIsClicked}/>
      <div className="canvas-container w-full h-full absolute bg-black">
        <Canvas >
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ambientLight intensity={1} color={"white"} position={[0, 10, 0]} />
            <MovingCamera handlelink={handlelink} props={Astro} isClicked={isClicked} setFinished={setFinished} />
            {finished ?  <Explosion position={[0, 0, -88]} scale={[10, 10, 10]}/>:''}
            {/* ASTRONAUTA Y ESTRELLAS */}
              <Planets position={[0, 0, -10]} />
            <group rotation={[2, 2, 4]} position={[-2, 2, -25]} scale={[24, 2, 0]}>
              <Float>
                <Space />
              </Float>
            </group>
            <group position={[0, 0, 0]}>
              <Float>
                <Sparkles
                  noise={0}
                  count={1000}
                  speed={0.01}
                  size={0.6}
                  color={"#FFD2BE"}
                  opacity={10}
                  scale={[200, 100, 20]}
                ></Sparkles>
                <Sparkles
                  noise={0}
                  count={500}
                  speed={0.01}
                  size={10}
                  color={"#FFF"}
                  opacity={2}
                  scale={[300, 100, 10]}
                ></Sparkles>
                <MovingStars props={Astro} isDone={isDone} setIsdone={setIsdone}>
                  <Float>
                    <Sparkles
                  noise={0}
                  count={1000}
                  speed={0.01}
                  size={0.6}
                  color={"#FFD2BE"}
                  opacity={10}
                  scale={[200, 100, 20]}
                ></Sparkles>
                <Sparkles
                  noise={0}
                  count={500}
                  speed={0.01}
                  size={10}
                  color={"#FFF"}
                  opacity={2}
                  scale={[300, 100, 10]}
                    ></Sparkles>
                  </Float>
                </MovingStars>
                <Moving>
                  <Astro
                    isDone={isDone}
                    position={position}
                    rotation={[0.2, 0.3, 0]}
                  />
                </Moving>
              </Float>
            </group>
            
          </Suspense>
          
        </Canvas>
        <Loader />
      </div>
    </>
  );
}

export default Astronaut;