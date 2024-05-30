import { Projects } from "../components/Projects";
import project1 from "../assets/project1.png";
import project12 from "../assets/project12.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
export const ProjectSection = () => {
  return (
    <div className="bg-gradient-to-t from-[#0D1321] to-[#252b37]">
      <h2 className="text-3xl text-start my-10 pt-4 ml-4 text-[#F7AB0A] font-semibold tracking-wide ">
        Projects
      </h2>
      <Projects
        projectName={"Secret Santa"}
        projectImg={project1}
        ProjectDescription={
          "I made this project so i can play with my co-workers avoiding the waste of paper. For the logic just an array random sort and for the result i send user the emails with the rules they set, as a prompt the app needs participants cuanties,  names and emails"
        }
        ProjectTechnologies={
          "i used Tailwind css for the styling , react for the logic and for the UI, git as a version control, react router for routing , to avoid backend i use EmailJS to handle emails"
        }
        ProjectLink={"/InvisibleFriend"}
        ProjectGit={"https://github.com/GabrielPaparello/InvisibleFriend"}
      />
      <Projects
        projectName={"Position Assignment"}
        projectImg={project12}
        ProjectDescription={""}
        ProjectTechnologies={""}
        ProjectLink={"/numberAsigner"}
        ProjectGit={""}
      />
      <Projects
        projectName={"Portfolio for client"}
        projectImg={project3}
        ProjectLink={"https://gabrielacandio.netlify.app/"}
        ProjectDisabled={true}
      />
      <Projects projectImg={project4} ProjectLink={"/TicTacToe"} />
    </div>
  );
};
