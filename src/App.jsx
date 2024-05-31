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
    const [open, setOpen] = useState(false);

  return (
    <>
      <Nav setOpen={setOpen} open={open} />
      <div onClick={() => setOpen(false)}>

      <Header />
      <ProjectSection />
      {/* <About /> */}
      <Contact />
      <Footer />
      </div>
    </>
  );
};
