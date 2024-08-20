import video from "./assets/bgVideo.mp4";
import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { ProjectSection } from "./sections/ProjectSection";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

interface portfolioProps {
  setHandleNav: React.Dispatch<React.SetStateAction<boolean>>;
  handleNav: boolean;
}



export const Portfolio = ({ setHandleNav, handleNav } : portfolioProps ) => {
  return (
    <div className="overflow-x-hidden">
      <Nav handleNav={handleNav} />
      <div onClick={() => setHandleNav(!handleNav)}></div>
      <video
        className="absolute -z-10 left-[0vw] top-[0vh] backdrop-filter backdrop-blur-3xl video"
        loop
        autoPlay
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <Header />
      <About />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  );
};
