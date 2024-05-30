import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { ProjectSection } from "./sections/ProjectSection";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <ProjectSection />
      {/* <About /> */}
      <Contact />
    </>
  );
};
