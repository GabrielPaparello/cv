import { Projects } from "../components/Projects";
import project1 from "../assets/project1.png";
import project12 from "../assets/project12.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
export const ProjectSection = () => {
  return (
    <div id='Projects' className="bg-gradient-to-t from-[#0D1321] to-[#252b37]">
      <h2 className="text-3xl text-center my-10 pt-4 ml-4 text-[#F7AB0A] font-semibold tracking-wide ">
        Projects
      </h2>
      <Projects
        projectName={"Secret Santa"}
        projectImg={project1}
        ProjectDescription={
          "The web version of secret Santa.Select the amount of players, log the details and get started, and Email will be sent with the results."
        }
        ProjectTechnologies={
          "Used Tailwind css for the styling , react for the logic and UI, git as a version control, react router for routing . To avoid backend decided to use EmailJS to handle emails"
        }
        ProjectLink={"/InvisibleFriend"}
        ProjectGit={"https://github.com/GabrielPaparello/InvisibleFriend"}
      />
      <Projects
        projectName={"Position Assignment"}
        projectImg={project12}
        ProjectDescription={`This project asigns a random position, "number", to the participants`}
        ProjectTechnologies={""}
        ProjectLink={"/numberAsigner"}
        ProjectGit={""}
      />
      <Projects
        projectName={"Portfolio for client"}
        ProjectDescription={''}
        ProjectTechnologies={""}
        projectImg={project3}
        ProjectLink={"https://gabrielacandio.netlify.app/"}
        ProjectDisabled={true}
      />
      <Projects projectImg={project4} ProjectLink={"/TicTacToe"}
        ProjectGit={''}
        ProjectDescription={'This was my first project using javascript just a simple Tic Tac Toe game.'}
      ProjectTechnologies={'This project is made fully on vanilla Javascript'}/>

    </div>
  );
};
