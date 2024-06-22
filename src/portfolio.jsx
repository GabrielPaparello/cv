import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import video from "./assets/bgVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Canvas } from "@react-three/fiber";
import { Astro1 } from "./models/Astro1";
import { Rocket } from "./models/Rocket";
import { Satelite } from "./models/Satelite";
import { Float } from "@react-three/drei";
import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { ProjectSection } from "./sections/ProjectSection";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Suspense } from "react";

export const Portfolio = ({ setHandleNav, handleNav }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStartY, setTouchStartY] = useState(null);
  const ref = useRef(null);

  const handleNextScroll = (a) => {
    if (a != undefined) {
      ref.current.scrollTo(a);
      setCurrentPage(a);
    }
  };

  const handleNextScroll1 = () => {
    const nextPage = (currentPage === 2) ? (currentPage + 3) % 6 : (currentPage + 1) % 6;
    ref.current.scrollTo(nextPage);
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (currentPage === 2) return; // Disable scrolling on page 3

      if (e.deltaY > 0) {
        // Scroll down
        if (currentPage < 5) {
          setCurrentPage((prevPage) => {
            const nextPage = prevPage + 1;
            ref.current.scrollTo(nextPage);
            return nextPage;
          });
        }
      } else {
        // Scroll up
        if (currentPage > 0) {
          setCurrentPage((prevPage) => {
            const nextPage = prevPage - 1;
            ref.current.scrollTo(nextPage);
            return nextPage;
          });
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e) => {
      if (currentPage === 2) return; // Disable scrolling on page 3

      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // Swipe up
        if (currentPage < 5) {
          setCurrentPage((prevPage) => {
            const nextPage = prevPage + 1;
            ref.current.scrollTo(nextPage);
            return nextPage;
          });
        }
      } else if (touchEndY - touchStartY > 50) {
        // Swipe down
        if (currentPage > 0) {
          setCurrentPage((prevPage) => {
            const nextPage = prevPage - 1;
            ref.current.scrollTo(nextPage);
            return nextPage;
          });
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentPage, touchStartY]);

  return (
    <div className="overflow-x-hidden">
      <Parallax pages={6} ref={ref} config={{ mass: 1, tension: 40, friction: 10 }}>
        <ParallaxLayer sticky={{ start: 0, end: 5 }} style={{ zIndex: 0, width: "10vw", height: "10vh" }}>
          <Nav handleNav={handleNav} handleNextScroll={handleNextScroll} />
          <div onClick={() => setHandleNav(!handleNav)}>
            <button onClick={handleNextScroll1}>
              <FontAwesomeIcon
                icon={currentPage !== 5 ? faArrowAltCircleDown : faArrowAltCircleUp}
                size="4x"
                className="relative top-[85vh] left-[42vw] text-white cursor-pointer"
              />
            </button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} style={{ position: "absolute", zIndex: -1 }}>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={1} color={"white"} position={[0, 10, 0]} />
              <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Satelite position={[0, 2, 0]} rotation={[2, 2, 0]} scale={[0.09, 0.09, 0.09]} />
              </Float>
            </Suspense>
          </Canvas>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 5 }} style={{ zIndex: -2 }}>
          <video className="absolute -z-10 left-[0vw] top-[0vh] backdrop-filter backdrop-blur-3xl video" loop autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={1} style={{ zIndex: 0 }}>
          <Header handleNextScroll={handleNextScroll} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1} speed={1}>
          <About />
          <Canvas>
            <ambientLight intensity={1} color={"white"} position={[0, 10, 0]} />
            <Astro1 currentPage={currentPage} position={[0, 1.8, -4]} rotation={[0.6, 0, 0]} />
          </Canvas>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <ProjectSection />
        </ParallaxLayer>
        <ParallaxLayer offset={5} factor={1} speed={1}>
          <Contact />
          <Canvas style={{ position: "absolute" }}>
            <ambientLight intensity={1} color={"white"} position={[0, 10, 0]} />
            <Rocket position={[0, 3, 0]} rotation={[0.5, -0.4, -0.2]} scale={0.0023} />
          </Canvas>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
