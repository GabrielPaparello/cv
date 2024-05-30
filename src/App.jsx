import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { ProjectSection } from "./sections/ProjectSection";
import { About } from "./sections/About";

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <ProjectSection />
      <About />
    </>
  );
};
