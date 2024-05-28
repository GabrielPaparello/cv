import { Nav } from "./components/Nav";
import { Header } from "./sections/Header";
import { Projects } from "./sections/Projects";
export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <h2 className="text-3xl text-center my-10 ">Projects</h2>
      <Projects
        projectName={"Secret Santa"}
        projectImg={"./src/assets/project1.png"}
        ProjectDescription={"I made this project so i can play with my co-workers avoiding the waste of paper. For the logic just an array random sort and for the result i send user the emails with the rules they set, as a prompt the app needs participants cuanties,  names and emails"}
        ProjectTechnologies={"i used Tailwind css for the styling , react for the logic and for the UI, git as a version control, react router for routing , to avoid backend i use EmailJS to handle emails"}
      />
      <Projects
        projectName={"Position Assignment"}
        projectImg={"./src/assets/project12.png"}
      />
      <Projects
        projectName={"Portfolio for client"}
        projectImg={"./src/assets/project3.png"}
      />
      <Projects projectImg={"./src/assets/project4.png"} />
    </>
  );
};
