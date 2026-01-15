import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Bus Timing Website",
    description:
      "A web platform that shows private bus timings and helps users find destinations easily.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built using React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Hill Road Accident Alert",
    description:
      "A project focused on displaying accident information on hill roads to manage traffic.",
    tech: ["JavaScript", "API", "Maps"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-10">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
