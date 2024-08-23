import { Projects } from "../components/Projects";
import projectData from "../components/project/data";
import "../App.css";
export const ProjectSection = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="flex flex-col md:gap-40 gap-16 justify-center align-middle items-center"
    >
      <h2 className="text-2xl relative md:text-4xl tracking-wider text-center text-gray-200 ">
        Checkout my latest projects
        <span className="absolute top-14 left-0 w-full text-gray-500 text-xs">
          Project order by most recent to oldest
        </span>
      </h2>
      <section className="flex flex-col gap-16 md:gap-24">
        {projectData.map((project, index) => (
          <Projects
            key={project.ProjectName}
            ProjectName={project.ProjectName}
            ProjectImg={project.ProjectImg}
            ProjectMobileImg={project.ProjectMobileImg}
            ProjectDescription={project.ProjectDescription}
            ProjectTechnologies={project.ProjectTechnologies}
            ProjectLink={project.ProjectLink}
            ProjectGit={project.ProjectGit}
            ProjectDisabled={project.ProjectDisabled}
            ProjectIcons={project.ProjectIcons}
          />
        ))}
      </section>
    </div>
  );
};
