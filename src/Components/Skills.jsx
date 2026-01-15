import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-20 px-20">
      <h2 className="text-4xl font-bold mb-10 text-center px-10">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="bg-white p-6 text-center rounded-xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-xl font-semibold">{skill}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
