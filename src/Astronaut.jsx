/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { Suspense,  useRef, useState } from "react";
import { Environment, useProgress, Sparkles, Html, Float, OrbitControls } from "@react-three/drei";
import { Astro } from "./models/Astro";
function Loader() {
  const { progress,  } = useProgress();
  return <Html>{progress.toFixed(1)} % loaded </Html>;
}
function Astronaut() {
  // STATES
  const [isDone, setIsdone] = useState(false);
  const [position, setPosition] = useState([-1, -2, -20]);
 
  const Moving = (props) => {
    const ref = useRef();
    useFrame((_state, delta) => {
      if (!isDone) {
        let o = ref.current.position.z += delta * 4;
        if (ref.current.position.z > 20 && !isDone) {
          let x = (-1)
          let y = (-2.5)
          let z =(0)
          setPosition([x,y,z]);
          setIsdone(true);
        }
      }
    });
    return <group ref={ref}>{props.children}</group>;
  };
  const MovingStars = (props) => {
    const ref = useRef();

    useFrame((_state, delta) => {
      if (!isDone) {
        ref.current.position.z += delta * 1;
        if (ref.current.position.z > 20) {
          ref.current.position.z = -20;

          setIsdone(true);
        }
      }
    });
    return <group ref={ref}>{props.children}</group>;
  };

  return (
    <>
      <div className="absolute h-[50vh] w-[50vw] z-10">
        <h1 className="text-white text-2xl md:text-nowrap font-extralight  absolute top-[30vh] left-[60vw] md:top[70vh] md:left-[50vw]">
          Welcome to my Portfolio
        </h1>
        <button className="text-white text-xl font-extralight text-nowrap absolute border py-1 px-4 rounded-md hover:bg-white hover:text-black hover:border-black hover:font-semibold hover:scale-125  top-[50vh] left-[60vw]">
          Enter
        </button>
      </div>
      <div className="canvas-container w-full h-full absolute bg-black">
        <Canvas >
          <Suspense fallback={<Loader />}>
            <Environment preset="night" />
            <ambientLight intensity={1} color={"white"} position={[0, 10, 0]} />
            {/* ASTRONAUTA Y ESTRELLAS */}
           
            <group position={[0, 0, 0]}>
              <Float>


              <Sparkles
                noise={0}
                count={500}
                speed={0.01}
                size={0.6}
                color={"#FFD2BE"}
                opacity={10}
                scale={[20, 100, 20]}
              ></Sparkles>
              <Sparkles
                noise={0}
                count={50}
                speed={0.01}
                size={10}
                color={"#FFF"}
                opacity={2}
                scale={[30, 100, 10]}
              ></Sparkles>
              <MovingStars>
                <Float>
                    <Sparkles

                  noise={0}
                  count={500}
                  speed={0.01}
                  size={0.6}
                  color={"#FFD2BE"}
                  opacity={10}
                  scale={[20, 100, 20]}
                ></Sparkles>
                <Sparkles
                  noise={0}
                  count={50}
                  speed={0.01}
                  size={10}
                  color={"#FFF"}
                  opacity={2}
                  scale={[30, 100, 10]}
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
            {/* ASTRONAUTA Y ESTRELLAS */}
{/* <OrbitControls /> */}
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default Astronaut;
