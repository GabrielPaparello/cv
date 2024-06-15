import { a, useSpring } from '@react-spring/three'
import { PerspectiveCamera } from '@react-three/drei';
const AnimatedPerspectiveCamera = a(PerspectiveCamera);
export const MovingCamera = ({ props, isClicked, setFinished, handlelink}) => {
  
      setFinished(true)
      const { positionz } = useSpring({
        
        from: { positionz: [0, 0, 7] },
        to: async (next) => {
          if (isClicked) {
           
            await next({positionz: [0, 0, 80], config: { duration: 1500 } });
            await new Promise((resolve) => setTimeout(resolve, 2000));
            await next({ positionz: [0, 0, -87.90], config: { duration: 2000 } });
            await new Promise((handlelink()));
          }
        },
        
  
        
      });


      return <AnimatedPerspectiveCamera makeDefault position={positionz}>{props.children}</AnimatedPerspectiveCamera>;
    
};