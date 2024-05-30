import { ProjectSection } from "./sections/ProjectSection";
import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <ProjectSection />
    </>
  );
};
