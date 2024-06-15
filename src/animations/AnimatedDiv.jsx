import { useSpring } from "@react-spring/three";
import { animated } from "@react-spring/web";

export const AnimatedDiv = ({ isDone, isClicked, setIsClicked }) => {

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
      duration: 700,
    },
  });

  return (
    <div className={`absolute h-[50vh] w-[50vw] z-10 ${isClicked ? "opacity-0" : "opacity-100"}`}>
      <animated.h1
        style={{ 
          ...animationProps, 
          transformOrigin: 'top', 
          fontSize: '20px',
          color: 'white',
          position: 'absolute',
          top: '10vh',
          left: '30vw',
        }} className="text-2xl  text-white text-nowrap font-extralight absolute top-[30vh] left-[65vw] md:top[70vh] md:left-[50vw]">
        Welcome to my Portfolio
      </animated.h1>
      <animated.button
        style={animationProps}
        onClick={() => setIsClicked(true)}
        className="text-xl font-extralight text-nowrap absolute border py-1 px-4 rounded-md hover:bg-white hover:text-black hover:border-black hover:font-semibold hover:scale-125 text-white top-[30vh] md:top-[20vh] left-[50vw]"
      >
        Enter
      </animated.button>
    </div>
  );
};