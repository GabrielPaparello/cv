import { Portfolio } from "./portfolio";
import { useEffect, useState } from "react";
import Astronaut from "./Astronaut";
import useLocalStorage from "./components/LocalStorage";
export const App = () => {
  // THIS WAS MY FIX TO MAKE THE NAV CLOSE
  // CLICKING ON THE BACKGROUND
  const [handleNav, setHandleNav] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const [isDone, setIsdone] = useState(false);
  const [position, setPosition] = useState([-1, -2, -20]);
  const [finished, setFinished] = useState(false);
  const [show, setShow] = useLocalStorage("show", false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.localStorage.removeItem("show");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <>
      {/* <div className={`${ */}
        {/* !show ? "" : "hidden"}`}> */}
      <Astronaut 
        isClicked={isClicked}
        isDone={isDone}
        position={position}
        finished={finished}
        show={show}
        setIsClicked={setIsClicked}
        setFinished={setFinished}
        setIsdone={setIsdone}
        setShow={setShow}
        setPosition={setPosition}
      />
      {/* </div> */}
      
      <Portfolio show={show} setHandleNav={setHandleNav} handleNav={handleNav}/>
    </>
  );
};
