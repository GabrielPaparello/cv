import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const Projects = ({
  projectName,
  projectImg,
  ProjectDescription,
  ProjectTechnologies,
  ProjectLink,
  ProjectGit,
  ProjectDisabled,
}) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={`text-center  text-white  relative  m-4 p-4 flex flex-col justify-start items-center gap-2  `}
        onClick={() => {
          setActive(!active);
        }}
      >
        <h2
          className={`backFace text-2xl duration-[2s] font-serif tracking-wider  ${
            active ? "rotation3d" : ""
          }   mb-4 `}
        >
          {projectName}
        </h2>
        <img
          className={`backFace h-[430px] shadow-xl shadow-[#0D1321] rounded-2xl  w-[350px]  duration-[2s]  ${
            active ? "rotation3d" : ""
          } `}
          src={projectImg}
          alt="fotografía de proyecto"
        />
        <div
          className={`backFace  ${
            active ? "" : "rotationBack3d "
          } duration-[2s] p-4  absolute  top-24  flex flex-col justify-center  gap-1 h-96 w-96`}
        >
          <div className="scale-90">
            <FontAwesomeIcon
              icon={faClose}
              className=" text-3xl mb-3 cursor-pointer ml-80"
              onClick={() => setActive(!active)}
            />
            <section>
              <h2
                className={`text-2xl font-serif tracking-wider ${
                  active ? "" : "opacity-100"
                }   mb-4 `}
              >
                {projectName}
              </h2>
              <h2 className="text-3xl  text-[#F7AB0A] text-start font-semibold -pt-20 pb-7">
                Description
              </h2>
              <p className="text-center  text-lg">{ProjectDescription}</p>
            </section>
            <section>
              <h2 className="text-2xl  text-[#F7AB0A] text-start font-semibold py-5 ">
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
                    : ` border-yellow-600 `
                } my-16 m-4 border-2   w-32 h-16 rounded-lg font-bold text-yellow-600 text-lg`}
              >
                <a href={ProjectGit} className={``}>
                  {" "}
                  View code{" "}
                </a>
              </button>
              <button className="my-16  bg-yellow-600 w-32 h-16 rounded-lg font-bold text-lg cursor-pointer  hover:scale-110 text-white">
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
