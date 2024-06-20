import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { ProjectSection } from "./sections/ProjectSection";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export const Portfolio = ({show, setHandleNav, handleNav}) => {
  return (
    
<div
        className={`overflow-x-hidden  ${
          show ? "" : "hidden"
        } `}
    >
      
{/*        
      <Parallax pages={4}>
        
        
        <ParallaxLayer offset={0} factor={1} speed={4} >
          <Nav handleNav={handleNav} />
        <div onClick={() => setHandleNav(!handleNav)}>
          <Header />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999} factor={1} speed={4}>
           <Nav handleNav={handleNav} />
        <div onClick={() => setHandleNav(!handleNav)}>
          <About />
          </div>
          </ParallaxLayer>
        <ParallaxLayer offset={2} speed={4}>
           <Nav handleNav={handleNav} />
        <div onClick={() => setHandleNav(!handleNav)}>
          <ProjectSection />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} factor={1} speed={4}>
           <Nav handleNav={handleNav} />
        <div onClick={() => setHandleNav(!handleNav)}>
          <Contact />
          <Footer />
          </div>
        </ParallaxLayer>
        
      </Parallax> */}
        <Nav handleNav={handleNav} />
        <div onClick={() => setHandleNav(!handleNav)}> 
          <Header />
          <About />
          <ProjectSection />
          <Contact />
           <Footer />
      </div>
       </div>
  )
}
