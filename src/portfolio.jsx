import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { ProjectSection } from "./sections/ProjectSection";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import video from "./assets/bgVideo.mp4";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

export const Portfolio = ({ show, setHandleNav, handleNav }) => {
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
    if (currentPage == 2) {
      const nextPage = (currentPage + 3) % 6;
      ref.current.scrollTo(nextPage);
      setCurrentPage(nextPage);
    } else {
      const nextPage = (currentPage + 1) % 6;
      ref.current.scrollTo(nextPage);
      setCurrentPage(nextPage);
    }
};

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        // Scroll down
        if (currentPage < 2) {
          setCurrentPage((prevPage) => {
            const nextPage = prevPage + 1;
            ref.current.scrollTo(nextPage);
            return nextPage;
          });
        }
      } else {
        // Scroll up
        if (currentPage > 0 && currentPage != 2) {
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
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // Swipe up
        if (currentPage < 2 && currentPage != 2) {
          setCurrentPage((prevPage) => {
            const nextPage = prevPage + 1;
            ref.current.scrollTo(nextPage);
            return nextPage;
          });
        }
      } else if (touchEndY - touchStartY > 50) {
        // Swipe down
        if (currentPage > 0 && currentPage != 2) {
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
    <div className={`overflow-x-hidden  ${show ? "" : "hidden"} `}>
      <Parallax pages={6} ref={ref}>
        <ParallaxLayer
          sticky={{ start: 0, end: 5 }}
          style={{ zIndex: 0, width: "10vw", height: "10vh" }}
        >
          <Nav handleNav={handleNav} handleNextScroll={handleNextScroll} />
          <div onClick={() => setHandleNav(!handleNav)}>
            <button onClick={handleNextScroll1}>
              {currentPage != 5 ? (
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  size="4x"
                  className="relative top-[85vh] left-[42vw] text-white cursor-pointer"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faArrowAltCircleUp}
                  size="4x"
                  className="relative top-[85vh] left-[42vw] text-white cursor-pointer"
                />
              )}
            </button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 5 }} style={{ zIndex: -2 }}>
          <div>
            <video
              className="absolute -z-10 left-[0vw] top-[0vh] backdrop-filter backdrop-blur-3xl video "
              loop
              autoPlay
              muted
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={1} speed={1} style={{ zIndex: 0 }}>
          {/* <Nav handleNav={handleNav} />
        <div onClick={() => setHandleNav(!handleNav)}> */}
          <Header handleNextScroll={handleNextScroll} ref={ref} />
          {/* </div> */}
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1} speed={1}>
          {/* <Nav handleNav={handleNav} /> */}
          {/* <div onClick={() => setHandleNav(!handleNav)}> */}
          <About />
          {/* </div> */}
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          {/* <Nav handleNav={handleNav} /> */}
          {/* <div onClick={() => setHandleNav(!handleNav)}> */}
          <ProjectSection />
          {/* </div> */}
        </ParallaxLayer>
        <ParallaxLayer offset={5} factor={1} speed={1}>
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
  );
};
