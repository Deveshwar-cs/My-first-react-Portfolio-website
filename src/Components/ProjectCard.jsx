import React from "react";

const ProjectCard = ({title, description, tech}) => {
  console.log("hello world");
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
