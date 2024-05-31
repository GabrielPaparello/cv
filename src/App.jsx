import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { ProjectSection } from "./sections/ProjectSection";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <ProjectSection />
      {/* <About /> */}
      <Contact />
      <Footer />
    </>
  );
};
