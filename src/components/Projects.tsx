import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavToggleContext } from "@/lib/context/NavToggleContext";
import { singleProjectType } from "./project/data";

type ProjectProps = singleProjectType;

export const Projects = ({
  ProjectName,
  ProjectImg,
  ProjectDescription,
  ProjectTechnologies,
  ProjectLink,
  ProjectGit,
  ProjectDisabled,
  ProjectMobileImg,
  ProjectIcons,
}: ProjectProps) => {
  // const [active, setActive] = useState(false);
  const { windowsWidth } = useContext(NavToggleContext);
  return (
    <>
      <section className="flex flex-col md:flex-row m-5 gap-8 p-5 text-center bg-gray-700/25 shadow-sm shadow-gray-600 rounded-lg  text-gray-200 justify-center align-middle items-center  ">
        <article className="self-center">
          <img
            className="w-[450px] md:w-[600px] rounded-xl  h-auto md:h-[700px] object-contain "
            src={windowsWidth < 768 ? ProjectMobileImg : ProjectImg}
            alt="fotografía del proyecto"
          />
        </article>
        <article className="flex flex-col items-start justify-evenly gap-5 text-center max-w-[400px] ">
          <h2 className="text-2xl md:text-4xl tracking-wider font-title text-start mb-3  text-[#F5F5F5] ">
            {ProjectName}
          </h2>
          <article>
            <p className="text-[#D1D5DB] text-base md:text-lg text-start font-body">
              {ProjectDescription}
            </p>
          </article>
          <article>
            <h3 className="font-title text-start mt-8 mb-2 text-[#F5F5F5] text-xl ">
              Tecnologies used
            </h3>
            <p className="text-[#D1D5DB] font-body text-start text-base md:text-lg">
              {ProjectTechnologies}
            </p>
          </article>
          <section className="flex bg-gray-800/70 p-3 shadow-sm shadow-gray-500 rounded-lg flex-wrap justify-center text-center gap-2  text-3xl max-w-[300px] ">
            {ProjectIcons?.map((Icon, index) => (
              <Icon key={`icon-${index}`} />
            ))}
          </section>
          <section>
            <button
              className={`${
                ProjectDisabled
                  ? `pointer-events-none opacity-50 border-1  text-gray-500 shadow-none`
                  : `  text-[#D97706]`
              } m-4   px-2 py-1 rounded-lg font-semibold  hover:text-[#F59E0B]  text-lg`}
            >
              <a href={ProjectGit}> View code </a>
            </button>
            <button className="text-[#3B8BCB] px-2 py-1 rounded-lg font-semibold text-lg cursor-pointer hover:text-[#5BA9E1]  ">
              <Link to={ProjectLink ? ProjectLink : "/"}>Try the app</Link>
            </button>
          </section>
        </article>
      </section>
    </>
  );
};
