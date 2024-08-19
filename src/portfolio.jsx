import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import video from "./assets/bgVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { ProjectSection } from "./sections/ProjectSection";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

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
    const nextPage =
      currentPage === 2 ? (currentPage + 3) % 6 : (currentPage + 1) % 6;
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
      <Parallax
        pages={6}
        ref={ref}
        config={{ mass: 1, tension: 40, friction: 10 }}
      >
        <ParallaxLayer
          sticky={{ start: 0, end: 5 }}
          style={{ zIndex: 0, width: "10vw", height: "10vh" }}
        >
          <Nav handleNav={handleNav} handleNextScroll={handleNextScroll} />
          <div onClick={() => setHandleNav(!handleNav)}>
            <button onClick={handleNextScroll1}>
              <FontAwesomeIcon
                icon={
                  currentPage !== 5 ? faArrowAltCircleDown : faArrowAltCircleUp
                }
                size="4x"
                className="relative top-[85vh] left-[42vw] text-white cursor-pointer"
              />
            </button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          style={{ position: "absolute", zIndex: -1 }}
        ></ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 5 }} style={{ zIndex: -2 }}>
          <video
            className="absolute -z-10 left-[0vw] top-[0vh] backdrop-filter backdrop-blur-3xl video"
            loop
            autoPlay
            muted
          >
            <source src={video} type="video/mp4" />
          </video>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={1} style={{ zIndex: 0 }}>
          <Header handleNextScroll={handleNextScroll} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1} speed={1}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <ProjectSection />
        </ParallaxLayer>
        <ParallaxLayer offset={5} factor={1} speed={1}>
          <Contact />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
