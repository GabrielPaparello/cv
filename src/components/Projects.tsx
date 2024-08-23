import { useContext, useState } from "react";
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
  const [active, setActive] = useState(false);
  let { windowsWidth } = useContext(NavToggleContext);
  return (
    <>
      <section className="flex flex-col md:flex-row m-5 gap-8 p-5 text-center bg-gray-800/25 shadow-sm shadow-gray-700 rounded-lg  text-gray-200 justify-center align-middle items-center  ">
        <article className="self-center">
          <img
            className="w-[450px] md:w-[600px] rounded-xl  h-auto md:h-[700px] object-contain "
            src={windowsWidth < 768 ? ProjectMobileImg : ProjectImg}
            alt="fotografía del proyecto"
          />
        </article>
        <article className="flex flex-col items-center justify-evenly gap-5 text-center max-w-[400px] ">
          <h2 className="text-2xl md:text-4xl tracking-wider text-center  text-gray-200 ">
            {ProjectName}
          </h2>
          <article>
            <h3>Project Description</h3>
            <p>{ProjectDescription}</p>
          </article>
          <article>
            <h3>Tecnologies used</h3>
            <p>{ProjectTechnologies}</p>
          </article>
          <section className="flex bg-gray-800/70 p-3 shadow-sm shadow-gray-500 rounded-lg flex-wrap justify-center text-center gap-2 mt-6 text-3xl max-w-[300px] ">
            {ProjectIcons?.map((Icon, index) => (
              <Icon key={`icon-${index}`} />
            ))}
          </section>
          <section>
            <button
              className={`${
                ProjectDisabled
                  ? `pointer-events-none opacity-50 border-1 border-gray-200 text-gray-100 shadow-none`
                  : ` border-[#0d588a] text-[#45b5ff]`
              } my-16 m-4 border  p-2 rounded-lg font-semibold hover:bg-[#0d588a]/60 hover:text-white  text-lg`}
            >
              <a href={ProjectGit}> View code </a>
            </button>
            <button className="my-16  bg-[#0d588a] p-2 rounded-lg font-semibold text-lg cursor-pointer hover:bg-[#0d588a]/50  text-white">
              <Link to={ProjectLink ? ProjectLink : "/"}>Try the app</Link>
            </button>
          </section>
        </article>
      </section>
    </>
  );
};
