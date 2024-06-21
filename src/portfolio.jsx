import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { ProjectSection } from "./sections/ProjectSection";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import  video  from "./assets/bgVideo.mp4";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";


export const Portfolio = ({ show, setHandleNav, handleNav }) => {
    const [currentPage, setCurrentPage] = useState(0);
  const ref = useRef(null);
  const handleNextScroll = (a) => {
    if (a != undefined) { ref.current.scrollTo(a); setCurrentPage(a);} 
    
  };


  const handleNextScroll1 = (a) => {
      const nextPage = (currentPage + 1) % 4;
      ref.current.scrollTo(nextPage);
      setCurrentPage(nextPage);

    
  };
  return (
    
<div
        className={`overflow-x-hidden  ${
          show ? "" : "hidden"
        } `}
    >
      
       
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer sticky={{ start: 0, end: 4 }} style={{ zIndex: 0, width: "10vw", height: "10vh"  }}>
          <Nav handleNav={handleNav} handleNextScroll={handleNextScroll}/>
          <div onClick={() => setHandleNav(!handleNav)}>
          <button onClick={handleNextScroll1}>
            {currentPage != 3 ?
              <FontAwesomeIcon icon={faArrowAltCircleDown} size="4x" className="relative top-[85vh] left-[50vw] text-white cursor-pointer" />
              : <FontAwesomeIcon icon={faArrowAltCircleUp} size="4x" className="relative top-[85vh] left-[50vw] text-white cursor-pointer" />
            }
            </button>
            </div>

        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 4 } } style={{zIndex: -2}}>
           <div>
          <video className="absolute -z-10 left-[0vw] top-[0vh] backdrop-filter backdrop-blur-3xl video " loop autoPlay muted >
            <source src={video} type="video/mp4" />
            </video>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={4} style={{zIndex: 0}}   >
          {/* <Nav handleNav={handleNav} />
        <div onClick={() => setHandleNav(!handleNav)}> */}
          <Header handleNextScroll={handleNextScroll} ref={ref} />
          {/* </div> */}
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1} speed={4} >
           {/* <Nav handleNav={handleNav} /> */}
        {/* <div onClick={() => setHandleNav(!handleNav)}> */}
          <About />
          {/* </div> */}
          </ParallaxLayer>
        <ParallaxLayer offset={2} speed={4}  >
           {/* <Nav handleNav={handleNav} /> */}
        {/* <div onClick={() => setHandleNav(!handleNav)}> */}
          <ProjectSection />
          {/* </div> */}
        </ParallaxLayer>
        <ParallaxLayer offset={3} factor={1} speed={4}  >
           {/* <Nav handleNav={handleNav} /> */}
        {/* <div onClick={() => setHandleNav(!handleNav)}> */}
          <Contact />
          <Footer />
          {/* </div> */}
        </ParallaxLayer>
        
      </Parallax>
        {/* <Nav handleNav={handleNav} />
        <div onClick={() => setHandleNav(!handleNav)}> 
          <Header />
          <About />
          <ProjectSection />
          <Contact />
           <Footer />
      </div> */}
       </div>
  )
}
