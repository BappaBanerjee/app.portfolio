import React from "react";
import { projects } from "../../data/projects";
import ProjectsSection from "./projectCard2";
const Project = () => {
  return (
    <div className="container mx-auto min-h-screen py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Key <span className="text-red-600">Projects</span>
      </h2>

      <ProjectsSection projects={projects} />
    </div>
  );
};

export default Project;
