import { Projects } from "../components/Projects";
import project1 from "../assets/project1.png";
import project12 from "../assets/project12.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import animationData from "../assets/animation3.json";
import Lottie from "react-lottie";
export const ProjectSection = () => {
  const defaultOptions = {
    
    loop: 2,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="Projects" className="bg-gradient-to-t mt-24 flex flex-col justify-center align-middle items-center from-[#252b37] to-[#0D1321]">
      <div className="bg-black bg-opacity-50 rounded-full w-[300px] h-[300px] ">
      <h2 className="text-4xl font-serif text-center    text-[#F7AB0A]  tracking-wider ">
        Projects
      <Lottie options={defaultOptions} height={250} width={250} />
      </h2>

      </div>
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
        ProjectGit={
          "https://github.com/GabrielPaparello/InvisibleFriend/tree/main/src/pages/numberAsigner/invisibleApp"
        }
      />
      <Projects
        projectName={"Portfolio for client"}
        ProjectDescription={""}
        ProjectTechnologies={""}
        projectImg={project3}
        ProjectLink={"https://gabrielacandio.netlify.app/"}
        ProjectDisabled={true}
      />
      <Projects
        projectImg={project4}
        projectName={"Tic Tac Toe"}
        ProjectLink={"/TicTacToe"}
        ProjectGit={"https://github.com/GabrielPaparello/tateti/tree/main"}
        ProjectDescription={
          "This was my first project using javascript just a simple Tic Tac Toe game."
        }
        ProjectTechnologies={"This project is made fully on vanilla Javascript"}
      />
    </div>
  );
};
