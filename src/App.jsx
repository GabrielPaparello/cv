import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { ProjectSection } from "./sections/ProjectSection";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { useState } from "react";

export const App = () => {
  // THIS WAS MY FIX TO MAKE THE NAV CLOSE 
  // CLICKING ON THE BACKGROUND
    const [handleNav, setHandleNav] = useState(false);

  return (
    <>
      <Nav handleNav={handleNav}/>
      <div onClick={() => setHandleNav(!handleNav)}>

      <Header />
      <About />
      <ProjectSection />
      <Contact />
      <Footer />
      </div>
    </>
  );
};
