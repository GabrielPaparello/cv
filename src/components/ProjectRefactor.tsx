import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface ProjectProps {
  projectName?: string;
  projectImg: string;
  ProjectDescription: string;
  ProjectTechnologies: string;
  ProjectLink: string;
  ProjectGit?: string;
  ProjectDisabled?: boolean;
  projectMobileImg: string;
}
type OptionalProjectProps = Partial<ProjectProps>;
export const Projects = ({
  projectName,
  projectImg,
  ProjectDescription,
  ProjectTechnologies,
  ProjectLink,
  ProjectGit,
  ProjectDisabled,
  projectMobileImg,
}: OptionalProjectProps) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={`text-center  text-white  relative  m-4  p-4 flex flex-col  justify-center items-center content-center gap-7  `}
        onClick={() => {
          setActive(!active);
        }}
      >
        <h2
          className={`backFace  text-2xl duration-[1s] roboto tracking-wider  ${
            active ? "rotation3d" : ""
          }   `}
        >
          {projectName}
        </h2>
        <div className="h-[430px] flex justify-center  w-[350px] ">
          <img
            className={`backFace  shadow-xl shadow-[#0D1321] rounded-2xl block  max-w-[100%]  h-[430px] object-fill  duration-[1.5s]  ${
              active ? "rotation3d" : ""
            } `}
            src={projectImg}
            alt="fotografía de proyecto"
          />
          <img
            className={`backFace  shadow-xl shadow-[#0D1321] rounded-2xl block  max-w-[100%]  h-[430px] object-fill  duration-[1.5s]  ${
              active ? "rotation3d" : ""
            } `}
            src={projectMobileImg}
            alt="fotografía de proyecto"
          />
        </div>

        <div
          className={`backFace  ${
            active ? "" : "rotationBack3d "
          } duration-[1.5s] p-4  absolute  top-24  flex flex-col justify-center  gap-1 h-96 w-96`}
        >
          <div className="scale-90">
            <FontAwesomeIcon
              icon={faClose}
              className=" text-3xl mb-3 cursor-pointer ml-80"
              onClick={() => setActive(!active)}
            />
            <section>
              <h2
                className={`text-2xl roboto tracking-wider ${
                  active ? "" : "opacity-100"
                }   mb-4 `}
              >
                {projectName}
              </h2>
              <h2 className="text-3xl  text-[#6b4de5] text-start font-semibold -pt-20 pb-7">
                Description
              </h2>
              <p className="text-center  text-lg">{ProjectDescription}</p>
            </section>
            <section>
              <h2 className="text-2xl  text-[#45b5ff] text-start font-semibold py-5 ">
                Tecnologies used
              </h2>
              <p className="text-center text-lg">{ProjectTechnologies}</p>
            </section>
            <section className="flex justify-center text-center gap-2 mt-6 text-3xl">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faGit} />
              <FontAwesomeIcon icon={faJs} />
            </section>
            <div>
              <button
                className={`${
                  ProjectDisabled
                    ? `pointer-events-none opacity-50 border-1 border-gray-200 text-gray-100 shadow-none`
                    : ` border-[#6b4de5] text-[#45b5ff]`
                } my-16 m-4 border-2   w-32 h-16 rounded-lg font-bold  text-lg`}
              >
                <a
                  href={ProjectGit}
                  className={`hover:underline-offset-8 hover: hover:underline`}
                >
                  {" "}
                  View code{" "}
                </a>
              </button>
              <button className="my-16  bg-[#0d588a] w-32 h-16 rounded-lg font-bold text-lg cursor-pointer  hover:scale-110 text-white">
                <Link to={ProjectLink}>Try the app</Link>
              </button>
            </div>
          </div>
        </div>

        <h3 className="mb-9 text-xs text-gray-600">
          click the img to see Description
        </h3>
      </div>
    </>
  );
};

// <Projects
// ProjectName={"Trello clone"}
// ProjectImg={trelloProject}
// ProjectMobileImg={trelloMobileProject}
// ProjectDescription={
//   "The web version of secret Santa.Select the amount of players, log the details and get started, and Email will be sent with the results."
// }
// ProjectTechnologies={
//   "Used Tailwind css for the styling , react for the logic and UI, git as a version control, react router for routing . To avoid backend decided to use EmailJS to handle emails"
// }
// ProjectLink={"/InvisibleFriend"}
// ProjectGit={"https://github.com/GabrielPaparello/InvisibleFriend"}
// />
// <Projects
// ProjectName={"Secret Santa"}
// ProjectImg={SecretSanta}
// ProjectMobileImg={SecretSantaMobile}
// ProjectDescription={
//   "The web version of secret Santa.Select the amount of players, log the details and get started, and Email will be sent with the results."
// }
// ProjectTechnologies={
//   "Used Tailwind css for the styling , react for the logic and UI, git as a version control, react router for routing . To avoid backend decided to use EmailJS to handle emails"
// }
// ProjectLink={"/InvisibleFriend"}
// ProjectGit={"https://github.com/GabrielPaparello/InvisibleFriend"}
// />
// <Projects
// ProjectName={"Position Assignment"}
// ProjectImg={emparejar}
// ProjectMobileImg={emparejarMobile}
// ProjectDescription={`This project asigns a random position, "number", to the participants`}
// ProjectTechnologies={""}
// ProjectLink={"/numberAsigner"}
// ProjectGit={
//   "https://github.com/GabrielPaparello/InvisibleFriend/tree/main/src/pages/numberAsigner/invisibleApp"
// }
// />
// <Projects
// ProjectName={"Portfolio for client"}
// ProjectDescription={
//   " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
// }
// ProjectTechnologies={
//   " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard psum."
// }
// ProjectImg={portfolio}
// ProjectMobileImg={portfolioMobile}
// ProjectLink={"https://gabrielacandio.netlify.app/"}
// ProjectDisabled={true}
// />
// <Projects
// ProjectImg={tateti}
// ProjectMobileImg={tatetiMobile}
// ProjectName={"Tic Tac Toe"}
// ProjectLink={"/TicTacToe"}
// ProjectGit={"https://github.com/GabrielPaparello/tateti/tree/main"}
// ProjectDescription={
//   "This was my first project using javascript just a simple Tic Tac Toe game."
// }
// ProjectTechnologies={
//   "This project is made fully on vanilla Javascript"
// }
// />
