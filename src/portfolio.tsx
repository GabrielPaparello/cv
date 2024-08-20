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

export const Portfolio = ({ setHandleNav, handleNav }: portfolioProps) => {
  return (
    <div className="overflow-x-hidden">
      <Nav handleNav={handleNav} />
      <div onClick={() => setHandleNav(!handleNav)}></div>

      <Header />
      <About />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  );
};
