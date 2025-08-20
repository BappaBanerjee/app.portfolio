import React from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./projectCard";
const Project = () => {
  return (
    <div className="container mx-auto min-h-screen py-20">
      <div className="text-center text-5xl pt-10">
        My <span className="text-red-700"> Projects</span>
      </div>

      {projects.map((project, index) => (
        <section
          key={index}
          className="text-center md:text-left pt-20 px-5 md:px-20"
        >
          <ProjectCard {...project} index={index} />
        </section>
      ))}
    </div>
  );
};

export default Project;
