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
        className={`text-center   relative  border-1 border-gray-200 shadow-md p-4 shadow-[#000] flex flex-col justify-center `}
        onClick={() => {
          setActive(!active);
        }}
      >
        <h2 className="text-xl  mb-4">{projectName}</h2>
        <img
          className={` h-96 object-scale-down duration-500 ${active ? 'opacity-30' : 'opacity-100'} `}
          src={projectImg}
          alt="fotografía de proyecto"
        />
        <div
          className={`${
            active ? "scale-75" : "scale-0"
          } duration-700 p-4 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center gap-1`}
        >
          <FontAwesomeIcon
            icon={faClose}
            className="absolute top-0 right-0 m-2 text-3xl "
            onClick={() => setActive(!active)}
          />
          <section>
            <h2 className="text-2xl font-semibold -pt-20 pb-7">Description</h2>
            <p className="text-center text-sm">{ProjectDescription}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold p-5">Tecnologies used</h2>
            <p className="text-center text-sm">{ProjectTechnologies}</p>
          </section>
          <section className="flex justify-center text-center gap-2 mt-6 text-2xl">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faGit} />
            <FontAwesomeIcon icon={faJs} />
          </section>
          <div>
            <button className={`${ProjectDisabled ? `pointer-events-none opacity-50 border-1 border-gray-200 text-gray-100 shadow-none` : ` border-yellow-600 `}my-10 m-2 border-2   w-28 h-10 rounded-lg font-bold text-yellow-600`}>
              <a href={ProjectGit} className={``}> View code </a>  
            </button>
            <button className="my-10  bg-yellow-600 w-28 h-10 rounded-lg font-bold text-white">
              <Link to={ProjectLink}
              >Try the app</Link>
            </button>
          </div>
        </div>
        <h3 className="mb-8">click to see</h3>
      </div>
    </>
  );
};
