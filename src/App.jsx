import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { ProjectSection } from "./sections/ProjectSection";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { useEffect, useMemo, useState } from "react";
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
  const [show, setShow] = useLocalStorage('show', false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.localStorage.removeItem('show');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    <>
      <Astronaut isClicked={isClicked} isDone={isDone} position={position} finished={finished} show={show} setIsClicked={setIsClicked} setFinished={setFinished} setIsdone={setIsdone} setShow={setShow} setPosition={setPosition}/>
      <div className={`absolute  transition-all  duration-[2s] z-10 ${show? 'h-[100vh] w-[100vw] ' : '-h-[100vh] w-[0vw] hidden'} `}>
      <Nav handleNav={handleNav}/>
      <div onClick={() => setHandleNav(!handleNav)}>

      <Header />
      <About />
      <ProjectSection />
      <Contact />
      <Footer />
      </div>
      </div>
    </>
  );
};
