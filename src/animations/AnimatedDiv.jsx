/* eslint-disable react/prop-types */
import { useSpring } from "@react-spring/three";
import { animated } from "@react-spring/web";
import { faPlay } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'
export const AnimatedDiv = ({ isDone, isClicked,  handleClick }) => {

  const animationProps = useSpring({
    to: {
      opacity: isDone ? 1 : 0,
      transform: isDone ? 'translateY(0%)' : 'translateY(-100%)',
    },
    from: {
      opacity: 0,
      transform: 'translateY(-100%)',
    },
    config: {

      friction: 14,
      tension: 30,
      duration: 500,
    },
  });
  const animationProps2 = useSpring({
    to: {
      opacity: isDone ? 1 : 0,
      transform: isDone ? 'translateY(0%)' : 'translateY(-100%)',
    },
    from: {
      opacity: 0,
      transform: 'translateY(-100%)',
    },
    config: {

      friction: 100,
      tension: 20,
      duration: 700,
    },
  });

  return (
    <div className={`absolute h-[50vh] w-[50vw] z-10 ${isClicked ? "opacity-0" : "opacity-100"}`}>
      <animated.h1
        style={{ 
          ...animationProps2, 
          transformOrigin: 'top', 
          color: 'white',
          position: 'absolute',
        }} className="roboto-thin tracking-wide text-white text-nowrap font-extralight absolute top-[20vh] left-[40vw] text-3xl md:top-[30vh] md:left-[60vw] md:text-[40px]">
        Start journey
      </animated.h1>
      <animated.button
        style={animationProps} 
        onClick={handleClick}
        className="absolute py-4 px-4 border border-white rounded-full cursor-pointer top-[35vh] md:top-[50vh] left-[55vw] md:left-[65vw]"
      ><FontAwesomeIcon beatFade={false} size="4x"  icon={faPlay}  className="text-white pl-4 ">Start</FontAwesomeIcon> 
      </animated.button>
       
    </div>
  );
};