import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const MovingStars = ({props, isDone, setIsdone}) => {
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