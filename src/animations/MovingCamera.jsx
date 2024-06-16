/* eslint-disable react/prop-types */
import { a, useSpring } from "@react-spring/three";
import { PerspectiveCamera } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
const AnimatedPerspectiveCamera = a(PerspectiveCamera);
export const MovingCamera = ({ props, isClicked, setFinished }) => {
  const navigate = useNavigate();
  setFinished(true);
  const { positionz } = useSpring({
    from: { positionz: [0, 0, 7] },
    to: async (next) => {
      if (isClicked) {
        await next({ positionz: [0, 0, 80], config: { duration: 1500 } });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await next({
          positionz: [0, 0, -87.9],
          // onRest: () => navigate("/home"),
          config: { duration: 2000 },
        });
      }
    },
  });

  return (
    <AnimatedPerspectiveCamera makeDefault position={positionz}>
      {props.children}
    </AnimatedPerspectiveCamera>
  );
};
